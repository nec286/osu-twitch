import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { Results, ModeSelect } from '../components/common';
import { ScoreList } from '../components/viewer/top_ranks';

@connect(['state', 'store'])
export default class extends Component {
  async loadData(mode) {
    const { store, state } = this.props;
    if(!state.topRanks.get(mode)) {
      const data = await store.topRanks.fetch('rafis', mode);
      store.beatMaps.fetchAll(_.map(data, 'beatmap_id'));
    }
  }

  async componentWillMount() {
    const { state } = this.props;
    this.loadData(state.topRanksFilter);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    store.topRanks.filter = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state, store }) {
    const { topRanks, topRanksFilter, beatMaps } = state;
    const results = topRanks.get(topRanksFilter);

    return (
      <div className="top-ranks">
        <ModeSelect mode={ topRanksFilter } onChange={ this.handleModeChange } />
        { !!results && <Results results={ results } beatMaps={ beatMaps } /> }
        <pre style={{ display: 'none' }}>{ beatMaps.size }</pre>
      </div>
    );
  }
}
