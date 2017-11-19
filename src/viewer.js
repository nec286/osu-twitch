import './scss/viewer.scss';
import State from './stores/ViewerState';
import routes from './routes/viewer';

require('./index')(routes, State);
