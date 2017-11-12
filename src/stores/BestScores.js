import { observable, action, computed } from 'mobx';
import _ from 'lodash';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(userId, mode=0) {
    try {
      let result = await this.request.get(`/users/${userId}/best`, {
        params: { m: mode }
      });
      const scores = result.data;
      result = await Promise.all(result.data.map(score => {
        return this.request.get(`/beatmaps/${score.beatmap_id}`)
      }));
      this.beatMaps = _.keyBy(_.map(result, 'data[0]'), 'beatmap_id');
      this.state.bestScores.set(mode, scores);
    } catch(e) {
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.bestScoresFilter = filter;
  }

  set beatMaps(beatMaps) {
    this.state.beatMaps = Object.assign(this.state.beatMaps, beatMaps);
  }
}
