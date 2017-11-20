import { action } from 'mobx';
import _ from 'lodash';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(ids) {
    ids = ids.filter(id => Number(id) > 0);
    if(ids.length <= 0) return;
    try {
      const result = await this.request.get('/beatmaps', {
        params: { b: ids }
      });
      const map = _.keyBy(result.data, 'beatmap_id');
      this.state.beatMaps.merge(map);
    } catch(e) {
      this.state.lastError = e;
    }
  }
}
