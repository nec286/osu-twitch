import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading, Ranks, Summary } from 'components/viewer';

@connect(['store'])
export default class extends Component {
  loadData() {
    const { store, settings, mode, profiles } = this.props;
    if(!profiles.get(mode)) {
      store.profile.fetch(settings.get('osuUsername'), mode);
    }
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(nextProps) {
    if(!this.props.mods !== nextProps.mods) {
      this.loadData();
    }
  }

  render({ mode, isFetchingProfile, profiles }) {
    const profile = profiles.get(mode);

    return (
      <div className="profile">
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile && (
          <div className="d-flex justify-content-center m-2 py-2">
            <Ranks profile={ profile } />
            <Summary profile={ profile } />
          </div>
        ) }
      </div>
    );
  }
}
