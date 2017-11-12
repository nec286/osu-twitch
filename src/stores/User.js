import { observable, action, computed } from 'mobx';

export default class {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch(id) {
    const result = await this.request.get(`/users/${id}`, {
      params: {}
    });
    this.state.user = result.data[0];
  }
}
