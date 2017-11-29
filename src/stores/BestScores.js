import { action } from 'mobx';
import map from 'lodash.map';
import asyncWrapper from 'stores/asyncWrapper';

export default class {
  constructor(request, state, rootStore) {
    this.request = request;
    this.state = state;
    this.rootStore = rootStore;
  }

  @action async fetch(mode=0) {
    asyncWrapper.call(this, async () => {
      const result = await this.request.get('/users/viewing/best', {
        params: { m: mode, limit: 10 }
      });
      this.state.bestScores.set(mode, result.data);
      await this.rootStore.beatMaps.fetch(map(result.data, 'beatmap_id'));
    }, 'BestScores');
  }
}
