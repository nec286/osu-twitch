import Inferno from 'inferno';
import Component from 'inferno-component';
import { Tabs, Avatar, OsuProfileLink } from 'components/viewer';

export default class extends Component {
  render({ profile }) {
    return (
      <header>
        {!!profile &&
          <div className="d-flex player-info">
            <Avatar profile={ profile } />
            <OsuProfileLink username={ profile.username } />
          </div>
        }
        <Tabs />
      </header>
    );
  }
}
