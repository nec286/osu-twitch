import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading, VCenter, Header } from 'components/viewer';

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
  }

  componentWillUpdate() {
    this.scroll.scrollTop = 0;
  }

  render({ state, children }) {
    const { isFetchingSettings, lastError } = state;

    children = Inferno.cloneVNode(children, { ...state });

    return (
      <div className="viewer container-fluid p-0">
        <div className="scroll h-100" ref={ (el) => { this.scroll = el; } } >
          <Header { ...state } />
          <main className="fs-3">
            { isFetchingSettings &&  <Loading /> }
            { !isFetchingSettings && !!lastError && <VCenter>{ lastError }</VCenter> }
            { !isFetchingSettings && !lastError && children }
          </main>
        </div>
      </div>
    );
  }
}
