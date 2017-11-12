import { observable, action } from 'mobx';

export default class Settings {
  constructor(request, state) {
    this.request = request;
    this.state = state;
  }

  @action async fetch() {
    const result = await this.request.get('/settings');
    this.state.foo = result.data.foo;
  }

  @action async save() {
    const result = await this.request.post('/settings', {
      foo: 'bar'
    });
  }
}
