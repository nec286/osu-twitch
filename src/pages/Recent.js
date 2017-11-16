import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect } from 'components/common';
import { ResultList } from 'components/viewer/results';

@connect(['state', 'store'])
export default class extends Component {
  loadData(mode) {
    const { store, state } = this.props;
    if(!state.recentActivity.get(mode)) {
      store.recentActivity.fetch('rafis', mode);
    }
  }

  async componentWillMount() {
    const { state } = this.props;
    this.loadData(state.recentActivityFilter);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    store.recentActivity.filter = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state }) {
    const { recentActivity, recentActivityFilter, isFetchingRecentActivity, beatMaps } = state;
    const results = recentActivity.get(recentActivityFilter);

    return (
      <div className="recent">
        <ModeSelect mode={ recentActivityFilter } onChange={ this.handleModeChange } />
        { isFetchingRecentActivity ?
          <div>Loading...</div> :
          <ResultList results={ results } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
