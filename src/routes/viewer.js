import Inferno from 'inferno';
import { Route, IndexRoute } from 'inferno-router';
import App from 'components/App';
import Viewer from 'pages/Viewer';
import Activity from 'pages/Activity';
import BestScores from 'pages/BestScores';

export default (
  <Route component={ App }>
    <Route component={ Viewer }>
      <IndexRoute path="/" component={ Activity } />
      <Route path="/best" component={ BestScores } />
    </Route>
  </Route>
);
