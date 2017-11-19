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
      this.state.isFetchingRecentActivity = true;
      const result = await this.request.get('/users/viewing/recent', {
        params: { m: mode, limit: 50 }
      });
      this.state.recentActivity.set(mode, result.data);
      await this.rootStore.beatMaps.fetchAll(_.map(result.data, 'beatmap_id'));
      this.state.isFetchingRecentActivity = false;
    } catch(e) {
      this.state.isFetchingRecentActivity = false;
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.recentActivityFilter = filter;
  }
}
