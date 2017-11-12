import Inferno from 'inferno';
import { Router, match } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import createMemoryHistory from 'history/createMemoryHistory';
import axios from 'axios';
import _ from 'lodash';
import createContext from './context/viewer';
import State from './stores/ViewerState';
import routes from './routes/viewer';
import noop from './lib/noop';
// import 'flag-icon-css/css/flag-icon.css';
import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss';

if(process.env.NODE_ENV !== 'production') {
  require('inferno-devtools');
}

const context = createContext(new State(window.__STATE));
const history = createMemoryHistory();

Inferno.render(
  <Provider { ...context }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);

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
