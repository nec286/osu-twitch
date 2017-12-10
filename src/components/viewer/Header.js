import Inferno from 'inferno';
import Component from 'inferno-component';
import { Tabs, Avatar, OsuProfileLink } from 'components/viewer';

export default class extends Component {
  render({ settings }) {
    return (
      <header>
        {!!settings.size &&
          <div className="d-flex player-info">
            <Avatar username={ settings.get('osuUsername') } />
            <OsuProfileLink username={ settings.get('osuUsername') } />
          </div>
        }
        <Tabs />
      </header>
    );
  }
}
