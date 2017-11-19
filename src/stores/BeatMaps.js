import { action } from 'mobx';
import _ from 'lodash';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(id) {
    try {
      const result = await this.request.get('/beatmaps', {
        params: { b: id }
      });
      this.state.beatMaps.set(id, result.data);
      return result.data;
    } catch(e) {
      this.state.lastError = e;
    }
  }

  @action async fetchAll(ids) {
    try {
      const result = await Promise.all(ids.map(id => {
        return this.request.get('/beatmaps', {
          params: { b: id }
        });
      }));
      const map = _.keyBy(_.map(result, 'data'), 'beatmap_id');
      this.state.beatMaps.merge(map);
    } catch(e) {
      this.state.lastError = e;
    }
  }
}
