import Inferno from 'inferno';
import { Router, match, doAllAsyncBefore } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import createMemoryHistory from 'history/createMemoryHistory';
import Raven from './raven';
import createContext from 'context';

if(process.env.NODE_ENV !== 'production') {
  require('inferno-devtools');
}

module.exports = (routes, State) => {
  const context = createContext(new State({}));
  const history = createMemoryHistory();

  let init = () => {
    init = () => {};
    Inferno.render(
      <Provider { ...context }>
        <Router history={ history } asyncBefore={ url => doAllAsyncBefore(match(routes, url)) }>
          { routes }
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  };

  if(window.Twitch.ext) {
    window.Twitch.ext.onAuthorized(function(auth) {
      context.state.authorization = `Bearer ${auth.token}`;
      Raven.context(() => init());
    });

    window.Twitch.ext.onError(function(err) {
      context.state.lastError = err;
    });

    window.Twitch.ext.listen('broadcast', function(target, contentType, message) {
      message = JSON.parse(message);
      context.store.pubsub[message.key] = message;
    });
  }
};
