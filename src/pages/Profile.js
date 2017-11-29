import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, Accuracy, PrettyNumber, OsuProfileLink, Loading } from 'components/viewer';
import { TableRow, Showcase, Level } from 'components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  loadData(mode) {
    const { store, state } = this.props;
    if(!state.profiles.get(mode)) {
      store.profile.fetch(mode);
    }
  }

  componentWillMount() {
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
    const { modeFilter, isFetchingProfile, profiles } = state;
    const profile = profiles.get(modeFilter);

    return (
      <div className="profile">
        <ModeSelect mode={ modeFilter } onChange={ this.handleModeChange } />
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile &&
          <span>
            <Showcase profile={ profile } />
            <table className="table">
              <TableRow label="Full Profile" value={ <OsuProfileLink username={ profile.username } /> } />
              <TableRow label="Accuracy" value={ <Accuracy value={ profile.accuracy } /> } />
              <TableRow label="Play Count" value={ <PrettyNumber value={ profile.playcount } /> } />
              <TableRow label="Ranked Score" value={ <PrettyNumber value={ profile.ranked_score } /> } />
              <TableRow label="Total Score" value={ <PrettyNumber value={ profile.total_score } /> } />
              <TableRow label="Level" value={ <Level value={ profile.level } /> } />
            </table>
          </span> }
      </div>
    );
  }
}
