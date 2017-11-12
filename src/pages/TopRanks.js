import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, ScoreList } from '../components/viewer/top_ranks';

@connect(['state', 'store'])
export default class extends Component {
  async loadData(mode) {
    const { store, state } = this.props;
    if(!state.topRanks[mode]) {
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

  render({ state }) {
    const { topRanksFilter, beatMaps } = state;
    const scores = state.topRanks.get(topRanksFilter);

    return (
      <div className="top-ranks">
        <ModeSelect mode={ topRanksFilter } onChange={ this.handleModeChange } />
        { !!scores && <ScoreList scores={ scores } beatMaps={ beatMaps } /> }
        <pre>{ beatMaps.size }</pre>
      </div>
    );
  }
}
