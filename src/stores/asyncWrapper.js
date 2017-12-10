export default function(action, type, errorHandler) {
  this.state.lastError = null;
  this.state[`isFetching${type}`] = true;
  return Promise.resolve(action())
    .then((result) => {
      this.state[`isFetching${type}`] = false;
      return result;
    })
    .catch((e) => {
      if(typeof errorHandler === 'function') {
        errorHandler(e);
      } else {
        this.state.lastError = 'Unable to load extension';
      }
    });
}
