export default function(action, type, errorHandler) {
  this.state.lastError = null;
  this.state[`isFetching${type}`] = true;
  Promise.resolve(action())
    .then(() => {
      this.state[`isFetching${type}`] = false;
    })
    .catch((e) => {
      if(typeof errorHandler === 'function') {
        errorHandler(e);
      } else {
        this.state.lastError = 'Unable to load extension';
      }
    });
}
