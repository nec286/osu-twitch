import { action } from 'mobx';
import map from 'lodash.map';
import asyncWrapper from 'stores/asyncWrapper';

// TODO externalize
function errorHandler(e) {
  switch(e.response.status) {
    case 404:
    this.state.lastError = 'Profile not found';
    break;
    default:
    this.state.lastError = 'Unable to load profile';
  }
}

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(username, mode=0) {
    asyncWrapper.call(this, async () => {
      const result = await this.request.get(`/users/${username}`, {
        params: { m: mode, event_days: 15 }
      });
      this.state.profiles.set(mode, result.data);
      await this.rootStore.beatMaps.fetch(map(result.data.events, 'beatmap_id'));
    }, 'Profile', errorHandler.bind(this));
  }
}
