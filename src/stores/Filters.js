export default class {
  constructor(state) {
    this.state = state;
  }

  set mode(mode) {
    this.state.modeFilter = mode;
  }
}
