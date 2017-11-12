import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, ScoreList } from '../components/viewer/best_scores';

@connect(['state', 'store'])
export default class extends Component {
  loadData(mode) {
    const { store, state } = this.props;
    if(!state.bestScores[mode]) {
      store.bestScores.fetch('rafis', mode);
    }
  }

  async componentWillMount() {
    this.loadData(this.props.state.bestScoresFilter);
  }

  @autobind
  handleModeChange(e) {
    this.loadData(e.target.value);
  }

  render({ state }) {
    const { bestScoresFilter, beatMaps } = state;
    const scores = state.bestScores.get(bestScoresFilter);

    return (
      <div className="best-scores">
        <ModeSelect mode={ bestScoresFilter } onChange={ this.handleModeChange } />
        { !!scores && <ScoreList scores={ scores } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
