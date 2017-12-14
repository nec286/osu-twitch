import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { formatNo } from 'utils';
import { ModeSelect, Loading, TableRow, Ranks } from 'components/viewer';

@connect(['state', 'store'])
export default class extends Component {
  loadData(mode) {
    const { store, state } = this.props;
    const { settings } = state;
    if(!state.profiles.get(mode)) {
      store.profile.fetch(settings.get('osuUsername'), mode);
    }
  }

  componentWillMount() {
    const { state } = this.props;
    this.loadData(state.mode);
  }

  @autobind
  handleModeChange(e) {
    const { store } = this.props;
    store.filters.mode = e.target.value;
    this.loadData(e.target.value);
  }

  render({ state }) {
    const { mode, isFetchingProfile, profiles } = state;
    const profile = profiles.get(mode);

    return (
      <div className="profile">
        <ModeSelect mode={ mode } onChange={ this.handleModeChange } />
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile && (
          <div className="results">
            <Ranks profile={ profile } />
              <table className="table">
                <TableRow label="Accuracy" value={ profile.accuracy ? (Number(profile.accuracy).toFixed(2) + '%') : '-' } />
                <TableRow label="Play Count" value={ formatNo(profile.playcount || 0) } />
                <TableRow label="Ranked Score" value={ formatNo(profile.ranked_score || 0) } />
                <TableRow label="Total Score" value={ formatNo(profile.total_score || 0) } />
                <TableRow label="Level" value={ Math.floor(profile.level || 0) } />
              </table>
          </div>
        ) }
      </div>
    );
  }
}
