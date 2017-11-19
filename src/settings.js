import './scss/settings.scss';
import State from './stores/SettingsState';
import routes from './routes/settings';

require('./index')(routes, State);
