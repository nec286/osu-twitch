import { action } from 'mobx';
import _ from 'lodash';
import asyncWrapper from 'stores/asyncWrapper';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch() {
    asyncWrapper.call(this, async () => {
      const result = await this.request.get('/users/viewing', {
        params: { event_days: 10 }
      });
      this.state.user = result.data;
      await this.rootStore.beatMaps.fetch(_.map(result.data.events, 'beatmap_id'));
    }, 'User');
  }

  @action setData(data) {
    console.log(data);
    data.beatMaps.forEach(beatMap => {
      this.state.beatMaps.set(beatMap.beatmap_id, beatMap);
    });
    this.state.user = Object.assign(this.state.user, data.user);
  }
}
