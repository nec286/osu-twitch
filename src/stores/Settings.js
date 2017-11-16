import { observable, action } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch() {
    const result = await this.request.get('/settings');
    this.state.settings.replace(result.data.settings);
  }

  @action async save() {
    try {
      this.state.saveStatus = 'saving';
      const result = await this.request.post('/settings', this.state.settings);
      this.state.settings.replace(result.data.settings);
      this.state.saveStatus = 'saved';
    } catch(e) {
      this.state.saveStatus = null;
      console.log(e);
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
}
