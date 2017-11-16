import Inferno from 'inferno';
import { Router, match, doAllAsyncBefore } from 'inferno-router';
import { Provider } from 'inferno-mobx';
import createMemoryHistory from 'history/createMemoryHistory';
import axios from 'axios';
import _ from 'lodash';
import createContext from './context/viewer';
import State from './stores/ViewerState';
import routes from './routes/viewer';
// import 'flag-icon-css/css/flag-icon.css';
import './scss/viewer.scss';

if(process.env.NODE_ENV === 'development') {
  require('inferno-devtools');
}

const context = createContext(new State(window.__STATE));
const history = createMemoryHistory();

let init = () => {
  init = () => {}; // noop
  Inferno.render(
    <Provider { ...context }>
      <Router history={ history } asyncBefore={ url => doAllAsyncBefore(match(routes, url)) }>
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
  console.log(twitchAuth);
  // if(context.state.twitchContext) init();
  init();
}

/*
window.__onContext = function(twitchContext) {
  context.state.twitchContext = twitchContext;
  if(context.state.twitchAuth) init();
}
*/
