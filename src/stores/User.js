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
      this.state.user = result.data;
      await this.rootStore.beatMaps.fetchAll(_.map(result.data.events, 'beatmap_id'));
      this.state.isFetchingUser = false;
    } catch(e) {
      this.state.lastError = e;
      this.state.isFetchingUser = false;
    }
  }

  @action setData(data) {
    console.log(data);
    data.beatMaps.forEach(beatMap => {
      this.state.beatMaps.set(beatMap.beatmap_id, beatMap);
    });
    this.state.user = data.user;
  }
}
