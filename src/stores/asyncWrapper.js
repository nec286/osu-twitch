export default function(action, type) {
  this.state.lastError = null;
  this.state[`isFetching${type}`] = true;
  Promise.resolve(action())
    .then(() => {
      this.state[`isFetching${type}`] = false;
    })
    .catch((e) => {
      this.state.lastError = e;
    });
}
