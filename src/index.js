import Inferno from 'inferno';
import { Router, match, doAllAsyncBefore } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import createMemoryHistory from 'history/createMemoryHistory';
import axios from 'axios';
import createContext from './context';

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

  window.__onAuthorized = (twitchAuth) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${twitchAuth.token}`;
    context.state.twitchAuth = twitchAuth;
    // if(context.state.twitchContext) init();
    init();
  };

  window.__onContext = (twitchContext) => {
    context.state.twitchContext = twitchContext;
    if(context.state.twitchAuth) init();
  }

  window.__onMessage = (message) => {
    message = JSON.parse(message);
    context.store[message.key].setData(message);
  };
}
