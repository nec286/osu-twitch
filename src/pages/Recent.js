import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { Results, ModeSelect } from '../components/common';

@connect(['state', 'store'])
export default class extends Component {
  async loadData(mode) {
    const { store, state } = this.props;
    if(!state.recentActivity.get(mode)) {
      const data = await store.recentActivity.fetch('rafis', mode);
      store.beatMaps.fetchAll(_.map(data, 'beatmap_id'));
    }
  }

  async componentWillMount() {
    const { state } = this.props;
    this.loadData(state.recentActivityFilter);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    console.log(e.target.value);
    store.recentActivity.filter = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state }) {
    const { recentActivity, recentActivityFilter, beatMaps } = state;
    const results = recentActivity.get(recentActivityFilter);

    return (
      <div className="recent">
        <ModeSelect mode={ recentActivityFilter } onChange={ this.handleModeChange } />
        { !!results && <Results results={ results } beatMaps={ beatMaps } /> }
        <pre style={{ display: 'none' }}>{ beatMaps.size }</pre>
      </div>
    );
  }
}
