import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(userId, mode=0) {
    try {
      const result = await this.request.get(`/users/${userId}/best`, {
        params: { m: mode, limit: 10 }
      });
      this.state.topRanks.set(mode, result.data);
      return result.data;
    } catch(e) {
      console.log(e);
      this.state.lastError = e;
    }
  }

  set filter(filter) {
    this.state.topRanksFilter = filter;
  }
}
