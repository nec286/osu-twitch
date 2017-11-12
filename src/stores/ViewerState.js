import { observable, extendObservable } from 'mobx'

export default class State {
  constructor(state) {
    extendObservable(this, {
      twitchAuth: null,
      twitchContext: null,
      asyncStatus: null,
      lastError: null,
      user: {},
      topRanks: observable(new Map()), // These are mapped by mode for convinience
      topRanksFilter: 0,
      beatMaps: observable(new Map()),
      recentActivity: []
    }, state)
  }
}
