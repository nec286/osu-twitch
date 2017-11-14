import { observable, extendObservable } from 'mobx'

export default class State {
  constructor(state) {
    extendObservable(this, {
      twitchAuth: null,
      twitchContext: null,
      lastError: null,
      user: {},
      bestScores: observable(new Map()),
      bestScoresFilter: 0,
      isFetchingBestScores: false,
      beatMaps: observable(new Map()),
      recentActivityFilter: 0,
      isFetchingRecentActivity: false,
      recentActivity: observable(new Map())
    }, state)
  }
}
