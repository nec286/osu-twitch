import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading, Error, Header, Footer } from 'components/viewer';

@connect(['state', 'store'])
export default class extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.settings.fetch();
  }

  render({ state, children }) {
    const { isFetchingSettings, lastError, settings, profiles, lastRefreshTime } = state;

    if(isFetchingSettings) return <Loading />;

    return (
      <div className="container-fluid p-0">
        <Header settings={ settings } lastRefreshTime={ Date.now() } />
        <main className="page">
          { !lastError ? children : <Error error={ lastError } /> }
        </main>
        <Footer lastRefreshTime={ lastRefreshTime } />
      </div>
    );
  }
}
