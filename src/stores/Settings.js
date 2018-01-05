import { action } from 'mobx';
import asyncWrapper from 'stores/asyncWrapper';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch() {
    asyncWrapper.call(this, async () => {
      const result = await this.request.get('/settings', {
        headers: { Authorization: this.state.authorization }
      });
      if(result.data.settings) {
        this.state.mode = result.data.settings.mode;
        this.state.settings.replace(result.data.settings);
      }
    }, 'Settings');
  }

  @action async save() {
    try {
      this.state.saveStatus = 'saving';
      const result = await this.request.post('/settings', this.state.settings, {
        headers: { Authorization: this.state.authorization }
      });
      this.state.settings.replace(result.data.settings);
      this.state.saveStatus = 'saved';
    } catch(e) {
      this.state.saveStatus = null;
      this.state.lastError = e;
    }
  }

  @action validateAndSave() {
    const { settings, validation } = this.state;
    if(!settings.get('osuUsername')) {
      validation.set('osuUsername', ['required']);
    } else {
      this.save();
    }
  }

  @action clearValidation(name) {
    this.state.saveStatus = null;
    this.state.validation.delete(name);
  }

  set osuUsername(osuUsername) {
    this.state.settings.set('osuUsername', osuUsername);
  }

  set mode(mode) {
    this.state.settings.set('mode', mode);
  }
}
