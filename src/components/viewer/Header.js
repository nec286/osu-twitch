import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { formatNo } from 'utils';
import { Mode, Avatar, Badge, Flag, Summary, Tabs, Loading } from 'components/viewer';

class Ranks extends Component {
  render({ profile }) {
    const format = (value) => {
      return (value > 0 && profile.playcount > 0) ? formatNo(value) : '-';
    };

    return(
      <div className="d-flex flex-column">
        <Badge className="px-0 text-left font-weight-normal">
          <span className="icon-globe">{ format(profile.pp_rank) }</span>
        </Badge>
        <Badge className="px-0 text-left font-weight-normal">
          <Flag country={ profile.country }>{ format(profile.pp_country_rank) }</Flag>
        </Badge>
      </div>
    );
  }
}

class ProfileLink extends Component {
  render({ username }) {
    return(
      <a className="text-underline" href={ `https://osu.ppy.sh/u/${username}` } target="_blank" nofollow>
        <u>{ username }</u>
      </a>
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
    const { isFetchingProfile, mode } = this.props;
    if(!isFetchingProfile && nextProps.mode !== mode) {
      this.loadData();
    }
  }

  render({ settings, profiles, mode, isFetchingProfile }) {
    const profile = profiles.get(mode);

    return(
      <div className="d-flex p-2">
        <Avatar username={ settings.get('osuUsername') } />
        <div className="d-flex flex-column px-2 fs-1">
          <ProfileLink username={ settings.get('osuUsername') }  />
          { !!profile && <Ranks profile={ profile } /> }
        </div>
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile && <Summary profile={ profile } /> }
      </div>
    );
  }
}

export default class extends Component {
  render({ settings, mode }) {
    return (
      <header className="w-100">
        <div className="position-relative z-1">
          { !!settings.size && <Profile { ...this.props } /> }
          <Mode className="abs-b" mode={ mode } />
        </div>
        <Tabs />
      </header>
    );
  }
}
