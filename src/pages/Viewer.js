import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading, Error, Header } from 'components/viewer';

const updateLastRefreshTime = function() {
  const { store, state } = this.props;
  const timeout = 1000 * 60;
  if(state.lastRefreshTime) {
    store.pubsub.lastRefreshTime = state.lastRefreshTime - timeout;
  }
  setTimeout(updateLastRefreshTime.bind(this), timeout, this);
};

@connect(['state', 'store'])
export default class extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.settings.fetch();
  }

  componentDidMount() {
    updateLastRefreshTime.call(this);
    window.addEventListener('scroll', () => {
      document.body.className = (this.scroll.scrollTop > 1) ? 'collapse' : '';
    }, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  componentWillUpdate() {
    this.scroll.scrollTop = 0;
  }

  render({ state, children }) {
    const { isFetchingSettings, lastError, settings, mode, lastRefreshTime } = state;

    return (
      <div className="container-fluid p-0">
        <div className="scroll" ref={ (el) => { this.scroll = el; } } >
          <Header settings={ settings } mode={ mode } lastRefreshTime={ lastRefreshTime } />
          <main className="page">
            { isFetchingSettings &&  <Loading /> }
            { !isFetchingSettings && !!lastError && <Error error={ lastError } /> }
            { !isFetchingSettings && !lastError && Inferno.cloneVNode(children, { ...state }) }
          </main>
        </div>
      </div>
    );
  }
}
