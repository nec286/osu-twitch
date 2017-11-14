import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(userId, mode=0) {
    this.state.isFetchingBestScores = true;
    try {
      const result = await this.request.get(`/users/${userId}/best`, {
        params: { m: mode, limit: 10 }
      });
      this.state.bestScores.set(mode, result.data);
      await this.rootStore.beatMaps.fetchAll(_.map(result.data, 'beatmap_id'));
      this.state.isFetchingBestScores = false;
    } catch(e) {
      console.log(e);
      this.state.isFetchingBestScores = false;
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.bestScoresFilter = filter;
  }
}
