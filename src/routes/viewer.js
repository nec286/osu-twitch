import Inferno from 'inferno'
import { Route, IndexRoute, Redirect } from 'inferno-router'
import App from '../components/App'
import Viewer from '../pages/Viewer'
import Profile from '../pages/Profile';
import BestScores from '../pages/BestScores';

export default (
  <Route component={ App }>
    <IndexRoute component={ Viewer }>
      <Route path="/profile" component={ Profile } />
      <Route path="/best" component={ BestScores } />
    </IndexRoute>
  </Route>
)
