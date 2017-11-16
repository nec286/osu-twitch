import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(id) {
    try {
      console.log('GET THE FUCKING BEATMSP');
      const result = await this.request.get(`/beatmaps`, {
        params: { b: id }
      });
      this.state.beatMaps.set(id, result.data[0]);
      return result.data[0];
    } catch(e) {
      this.state.lastError = e;
    }
  }

  @action async fetchAll(ids) {
    try {
      const result = await Promise.all(ids.map(id => {
        return this.request.get(`/beatmaps`, {
          params: { b: id }
        });
      }));
      const map = _.keyBy(_.map(result, 'data[0]'), 'beatmap_id');
      this.state.beatMaps.merge(map);
    } catch(e) {
      console.log(e);
      this.state.lastError = e;
    }
  }
}
