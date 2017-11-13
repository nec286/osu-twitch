import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { Results, Paginator } from '../components/common';
import { ModeSelect, ScoreList } from '../components/viewer/top_ranks';

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
    this.loadData(this.props.state.topRanksFilter);
  }

  @autobind
  handleModeChange(e) {
    this.loadData(e.target.value);
  }

  render({ state, store }) {
    const { topRanksFilter, beatMaps } = state;
    const pagedResults = store.topRanks.paginate;

    return (
      <div className="top-ranks">
        <ModeSelect mode={ topRanksFilter } onChange={ this.handleModeChange } />
        { !!pagedResults && <Results results={ pagedResults } beatMaps={ beatMaps } /> }
        <pre style={{ display: 'none' }}>{ beatMaps.size }</pre>
        <Paginator context="topRanks" />
      </div>
    );
  }
}
