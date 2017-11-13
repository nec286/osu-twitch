import { observable, extendObservable } from 'mobx'

export default class State {
  constructor(state) {
    extendObservable(this, {
      twitchAuth: null,
      twitchContext: null,
      asyncStatus: null,
      lastError: null,
      user: {},
      topRanks: observable(new Map()),
      topRanksFilter: 0,
      topRanksPage: 0,
      topRanksLimit: 10,
      beatMaps: observable(new Map()),
      recentActivity: []
    }, state)
  }
}
