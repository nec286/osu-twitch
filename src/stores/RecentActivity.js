import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(userId) {
    try {
      const result = await this.request.get(`/users/${userId}/recent`, {
        params: { }
      });
      this.state.recentActivity = result.data;
      return result.data;
    } catch(e) {
      console.log(e);
      this.state.lastError = e;
    }
  }
}
