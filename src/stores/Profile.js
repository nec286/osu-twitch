import { action } from 'mobx';
import _ from 'lodash';
import asyncWrapper from 'stores/asyncWrapper';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(mode=0) {
    asyncWrapper.call(this, async () => {
      const result = await this.request.get('/users/viewing', {
        params: { m: mode, event_days: 15 }
      });
      this.state.profiles.set(mode, result.data);
      await this.rootStore.beatMaps.fetch(_.map(result.data.events, 'beatmap_id'));
    }, 'Profile');
  }

  @action setData(data) {
    if(data.beatMaps) {
      data.beatMaps.forEach(beatMap => {
        this.state.beatMaps.set(beatMap.beatmap_id, beatMap);
      });
    }
    this.state.profiles.set(0, Object.assign(this.state.profiles.get(0), data.user));
  }
}
