import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, Loading, Profile } from 'components/viewer';

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
        { !isFetchingProfile && !!profile && <Profile profile={ profile } /> }
      </div>
    );
  }
}
