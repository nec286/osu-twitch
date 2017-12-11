import Inferno from 'inferno';
import Component from 'inferno-component';
import { Tabs, Avatar, OsuProfileLink, RefreshTime } from 'components/viewer';

export default class extends Component {
  render({ settings, lastRefreshTime }) {
    return (
      <header>
        {!!settings.size &&
          <div className="d-flex player-info">
            <Avatar username={ settings.get('osuUsername') } />
            <OsuProfileLink username={ settings.get('osuUsername') } />
            <RefreshTime lastRefreshTime={ lastRefreshTime } />
          </div>
        }
        <Tabs />
      </header>
    );
  }
}
