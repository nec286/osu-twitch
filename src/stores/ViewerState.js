import { observable, extendObservable } from 'mobx';

export default class State {
  constructor(state) {
    extendObservable(this, {
      authorization: null,
      lastError: null,
      isFetchingProfile: false,
      profiles: observable(new Map()),
      mode: null,
      bestScores: observable(new Map()),
      isFetchingBestScores: false,
      beatMaps: observable(new Map()),
      isFetchingRecentActivity: false,
      recentActivity: observable(new Map()),
      lastRefreshTime: Date.now(),
      isFetchingSettings: false,
      settings: observable(new Map()),
    }, state);
  }
}
