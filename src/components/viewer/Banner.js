import Inferno from 'inferno';
import Component from 'inferno-component';
import { Avatar, ProfileLink, RefreshTime, Tabs } from 'components/viewer';

export default class extends Component {
  render({ settings, lastRefreshTime }) {
    return (
      <div className="banner">
        {!!settings.size &&
          <div className="d-flex p-2">
            <Avatar username={ settings.get('osuUsername') } />
            <ProfileLink className="pl-2 fs-2" username={ settings.get('osuUsername') } />
            { /* <RefreshTime className="ml-auto fs-4" lastRefreshTime={ lastRefreshTime } /> */ }
          </div> }
          <Tabs />
      </div>
    );
  }
}
