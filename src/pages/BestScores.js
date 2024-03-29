import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Results, Loading } from 'components/viewer';

@connect(['store'])
export default class extends Component {
  loadData() {
    const { store, settings, mode, bestScores } = this.props;
    if(!bestScores.get(mode)) {
      store.bestScores.fetch(settings.get('osuUsername'), mode);
    }
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(nextProps) {
    if(!this.props.mode !== nextProps.mode) {
      this.loadData();
    }
  }

  render({ mode, isFetchingBestScores, bestScores, beatMaps }) {
    const results = bestScores.get(mode);

    return (
      <div className="best-scores">
        { isFetchingBestScores ? <Loading /> : <Results results={ results } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
