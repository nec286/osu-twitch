import Inferno from 'inferno';
import Component from 'inferno-component';
import { Tabs, Avatar, OsuProfileLink, RefreshTime } from 'components/viewer';

class Banner extends Component {
  render({ settings, lastRefreshTime }) {
    return (
      <div className="banner p-2">
        <Avatar username={ settings.get('osuUsername') } />
        <OsuProfileLink className="pl-2" username={ settings.get('osuUsername') } />
        {/* <RefreshTime className="ml-auto" lastRefreshTime={ lastRefreshTime } /> */}
      </div>
    );
  }
}

export default class extends Component {
  render({ settings }) {
    return (
      <header>
        { !!settings.size && <Banner { ...this.props } /> }
        <Tabs />
      </header>
    );
  }
}
