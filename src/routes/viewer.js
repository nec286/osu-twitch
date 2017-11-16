import Inferno from 'inferno'
import { Route, IndexRoute, Redirect } from 'inferno-router'
import App from 'components/App'
import Viewer from 'pages/Viewer'
import Profile from 'pages/Profile';
import BestScores from 'pages/BestScores';
import Recent from 'pages/Recent';

export default (
  <Route component={ App }>
    <Route component={ Viewer }>
      <IndexRoute path="/" component={ Profile } />
      <Route path="/best" component={ BestScores } />
      <Route path="/recent" component={ Recent } />
    </Route>
  </Route>
)
