import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { formatNo } from 'utils';
import { Mode, Avatar, ProfileLink, Badge, Flag, Stats, Tabs, Loading } from 'components/viewer';

class Ranks extends Component {
  render({ profile }) {
    const format = (value) => {
      return (value > 0 && profile.playcount > 0) ? formatNo(value) : '-';
    };

    return(
      <div className="d-flex flex-column">
        <Badge className="px-0 text-left">
          <span className="icon-globe">{ format(profile.pp_rank) }</span>
        </Badge>
        <Badge className="px-0 text-left">
          <Flag country={ profile.country }>{ format(profile.pp_country_rank) }</Flag>
        </Badge>
      </div>
    );
  }
}

@connect(['store'])
class Profile extends Component {
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
    if(!this.props.mode !== nextProps.mode) {
      this.loadData();
    }
  }

  render({ settings, profiles, mode, isFetchingProfile }) {
    const profile = profiles.get(mode);

    return(
      <div className="d-flex p-2">
        <Avatar username={ settings.get('osuUsername') } />
        <div className="d-flex flex-column px-2 fs-3">
          <ProfileLink username={ settings.get('osuUsername') }  />
          { !!profile && <Ranks profile={ profile } /> }
        </div>
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile && <Stats profile={ profile } /> }
      </div>
    );
  }
}

export default class extends Component {
  render({ settings, mode }) {
    return (
      <header>
        <div className="position-relative">
          { !!settings.size && <Profile { ...this.props } /> }
          <Mode className="abs-b" mode={ mode } />
        </div>
        <Tabs />
      </header>
    );
  }
}
