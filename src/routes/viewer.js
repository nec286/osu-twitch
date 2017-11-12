import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import App from '../components/App'
import Viewer from '../pages/Viewer'
import Profile from '../pages/Profile';
import Best from '../pages/Best';

export default (
  <Route component={ App }>
    <IndexRoute component={ Viewer }>
      <Route path="/profile" component={ Profile } />
      <Route path="/best" component={ Best } />
    </IndexRoute>
  </Route>
)
