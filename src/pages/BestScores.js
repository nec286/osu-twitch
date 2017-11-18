import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, ResultList, Loading } from 'components/viewer';

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

    if(!!isFetchingBestScores) return <Loading />;

    return (
      <div className="best-scores">
        <ModeSelect mode={ bestScoresFilter } onChange={ this.handleModeChange } />
        <ResultList results={ results } beatMaps={ beatMaps } />
      </div>
    );
  }
}
