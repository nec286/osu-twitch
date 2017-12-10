import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { ModeSelect, Loading, Profile } from 'components/viewer';

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
        { !isFetchingProfile && !!profile && <Profile profile={ profile } /> }
      </div>
    );
  }
}
