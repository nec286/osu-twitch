import Inferno from 'inferno';
import { Route, IndexRoute } from 'inferno-router';
import App from 'components/App';
import Viewer from 'pages/Viewer';
import Profile from 'pages/Profile';
import BestScores from 'pages/BestScores';

export default (
  <Route component={ App }>
    <Route component={ Viewer }>
      <IndexRoute path="/" component={ Profile } />
      <Route path="/best" component={ BestScores } />
    </Route>
  </Route>
);
