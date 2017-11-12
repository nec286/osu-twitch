import { observable, action, computed } from 'mobx';
import _ from 'lodash';

window._ = _;

function isMode(value, mode) {
  return value.mode === mode;
}

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(userId, mode=0) {
    try {
      let result = await this.request.get(`/users/${userId}/recent`, {
        params: { m: mode }
      });
      const recent = result.data;
      result = await Promise.all(result.data.map(score => {
        return this.request.get(`/beatmaps/${recent.beatmap_id}`)
      }));
      this.state.beatMaps = Object.assign(this.state.beatMaps,
        _.keyBy(_.map(result, 'data[0]'), 'beatmap_id'));
      this.state.recent.set(mode, recent);
    } catch(e) {
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.bestScoresFilter = filter;
  }
}
