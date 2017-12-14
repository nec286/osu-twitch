import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
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

    // TODO abstract out
    // TODO don't forget to unbind the event listener
    window.addEventListener('scroll', (e) => {
      document.body.className = (this.scroll.scrollTop > 0) ? 'collapse-header' : '';
    }, true);
  }

  @autobind
  initScroll(el) {
    this.scroll = el;
  }

  render({ state, children }) {
    const { isFetchingSettings, lastError, settings, lastRefreshTime } = state;

    return (
      <div className="container-fluid p-0">
        <div className="scroll" ref={ this.initScroll } >
          <Header settings={ settings } lastRefreshTime={ lastRefreshTime } />
          <main className="page">
            { isFetchingSettings ? <Loading /> :
              <span>{ !lastError ? children : <Error error={ lastError } /> }</span>
            }
          </main>
        </div>
      </div>
    );
  }
}
