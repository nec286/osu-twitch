import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect } from '../components/common';
import { ResultList } from '../components/viewer/results';

@connect(['state', 'store'])
export default class extends Component {
  loadData(mode) {
    const { store, state } = this.props;
    if(!state.bestScores.get(mode)) {
      store.bestScores.fetch('rafis', mode);
    }
  }

  async componentWillMount() {
    const { state } = this.props;
    this.loadData(state.bestScoresFilter);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    store.bestScores.filter = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state, store }) {
    const { bestScores, bestScoresFilter, isFetchingBestScores, beatMaps } = state;
    const results = bestScores.get(bestScoresFilter);

    return (
      <div className="top-ranks">
        <ModeSelect mode={ bestScoresFilter } onChange={ this.handleModeChange } />
        { isFetchingBestScores ?
          <div>Loading...</div> :
          <ResultList results={ results } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
