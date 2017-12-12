import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading, Error, Header } from 'components/viewer';

@connect(['state', 'store'])
export default class extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.settings.fetch();
  }

  componentDidMount() {
    const { store, state } = this.props;
    const updateLastRefreshTime = function() {
      const { lastRefreshTime } = state;
      const timeout = 1000 * 60;
      if(lastRefreshTime) {
        store.pubsub.lastRefreshTime = lastRefreshTime - timeout;
      }
      setTimeout(updateLastRefreshTime, timeout);
    };
    updateLastRefreshTime();
  }

  render({ state, children }) {
    const { isFetchingSettings, lastError, settings, lastRefreshTime } = state;

    return (
      <div className="container-fluid p-0">
        <Header settings={ settings } lastRefreshTime={ lastRefreshTime } />
        <main className="page">
          { isFetchingSettings ? <Loading /> :
            <span>{ !lastError ? children : <Error error={ lastError } /> }</span>
          }
        </main>
      </div>
    );
  }
}
