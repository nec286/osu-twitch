import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(id) {
    try {
      const result = await this.request.get(`/beatmaps/:id`, {
        params: { }
      });
      this.state.beatMaps = this.state.beatMaps.filter(value => value.id !== id);
      this.state.beatMaps.push(result.data[0]);
    } catch(e) {
      this.state.lastError = e;
    }
  }
}
