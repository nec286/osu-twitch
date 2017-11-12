import Inferno from 'inferno';
import { Router, match } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import createMemoryHistory from 'history/createMemoryHistory';
import axios from 'axios';
import createContext from './context/settings';
import State from './stores/SettingsState';
import routes from './routes/settings.js';
import noop from './lib/noop';
import style from './scss/main.scss';

if (process.env.NODE_ENV !== 'production') {
  require('inferno-devtools');
}

const context = createContext(new State(window.__STATE));
const history = createMemoryHistory();

let init = function() {
  init = noop;
  Inferno.render(
    <Provider { ...context }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

// Twitch callbacks

window.__onAuthorized = function(twitchAuth) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${twitchAuth.token}`;
  context.state.twitchAuth = twitchAuth;
  if(context.state.twitchContext) init();
}

window.__onContext = function(twitchContext) {
  context.state.twitchContext = twitchContext;
  if(context.state.twitchAuth) init();
}
