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

  @computed get filter() {
    return this.state.topRanks.get(this.state.topRanksFilter);
  }

  @computed get paginate() {
    const { topRanksPage, topRanksLimit } = this.state;
    const filter = this.filter;
    if(!filter) return;
    return filter.slice(topRanksPage * topRanksLimit, topRanksPage + 1 * topRanksLimit);
  }

  set filter(filter) {
    Object.assign(this.state, {
      topRanksFilter: filter,
      topRanksPage: 0
    });
  }

  set page(page) {
    this.state.topRanksPage = page;
  }

  get page() {
    return this.state.topRanksPage;
  }

  get pageCount() {
    const filter = this.filter;
    if(!filter) return;
    return filter.length / this.state.topRanksLimit;
  }
}
