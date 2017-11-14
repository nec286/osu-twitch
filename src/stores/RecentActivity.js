import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(userId, mode=0) {
    this.state.isFetchingRecentActivity = true;
    try {
      const result = await this.request.get(`/users/${userId}/recent`, {
        params: { m: mode, limit: 50 }
      });
      this.state.recentActivity.set(mode, result.data);
      await this.rootStore.beatMaps.fetchAll(_.map(result.data, 'beatmap_id'));
      this.state.isFetchingRecentActivity = false;
    } catch(e) {
      console.log(e);
      this.state.isFetchingRecentActivity = false;
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.recentActivityFilter = filter;
  }
}
