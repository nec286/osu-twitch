import { action } from 'mobx';
import _ from 'lodash';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(userId, mode=0) {
    try {
      this.state.isFetchingBestScores = true;
      const result = await this.request.get('/users/viewing/best', {
        params: { m: mode, limit: 10 }
      });
      this.state.bestScores.set(mode, result.data);
      await this.rootStore.beatMaps.fetch(_.map(result.data, 'beatmap_id'));
      this.state.isFetchingBestScores = false;
    } catch(e) {
      this.state.isFetchingBestScores = false;
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.bestScoresFilter = filter;
  }

  @action setData(data) {
    data.beatMaps.forEach(beatMap => {
      this.state.beatMaps.set(beatMap.beatmap_id, beatMap);
    });
    this.state.bestScores.set(0, data.bestScores);
  }
}
