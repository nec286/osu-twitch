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
      store.bestScores.fetch(mode);
    }
  }

  async componentWillMount() {
    const { state } = this.props;
    this.loadData(state.modeFilter);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    store.filters.mode = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state }) {
    const { modeFilter, isFetchingBestScores, bestScores, beatMaps } = state;
    const results = bestScores.get(modeFilter);

    return (
      <div className="best-scores">
        <ModeSelect mode={ modeFilter } onChange={ this.handleModeChange } />
        { isFetchingBestScores ? <Loading /> : <ResultList results={ results } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
