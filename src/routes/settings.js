import Inferno from 'inferno';
import { Route, IndexRoute } from 'inferno-router';
import App from '../components/App';
import Settings from '../pages/Settings';

export default (
  <Route component={ App }>
    <IndexRoute component={ Settings } />
  </Route>
);
