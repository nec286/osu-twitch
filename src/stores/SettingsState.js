import { observable, extendObservable } from 'mobx'

export default class State {
  constructor(state) {
    extendObservable(this, {
      twitchAuth: null,
      twitchContext: null,
      validation: {}
    }, state)
  }
}
