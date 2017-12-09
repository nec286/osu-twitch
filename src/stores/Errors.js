export default class {
  constructor(state) {
    this.state = state;
  }

  clear() {
    this.state.lastError = null;
  }
}
