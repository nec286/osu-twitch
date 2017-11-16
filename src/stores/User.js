import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(id) {
    try {
      this.lastError = null;
      this.state.isFetchingUser = true;
      const result = await this.request.get(`/users/viewing`, {
        params: {}
      });
      this.state.user = result.data[0];
      await this.rootStore.beatMaps.fetchAll(_.map(result.data[0].events, 'beatmap_id'));
      this.state.isFetchingUser = false;
    } catch(e) {
      this.state.lastError = e;
      this.state.isFetchingUser = false;
    }
  }
}
