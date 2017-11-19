import { observable, extendObservable } from 'mobx';

export default class State {
  constructor(state) {
    extendObservable(this, {
      twitchAuth: null,
      twitchContext: null,
      lastError: null,
      validation: observable(new Map()),
      settings: observable(new Map()),
      saveStatus: null
    }, state);
  }
}
