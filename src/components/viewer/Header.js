import Inferno from 'inferno';
import Component from 'inferno-component';
import { Tabs, Avatar, OsuProfileLink } from 'components/viewer';

export default class extends Component {
  render({ settings }) {
    return (
      <header>
        {!!settings &&
          <div className="d-flex player-info">
            <Avatar username={ settings.get('osuUsername') } />
            <OsuProfileLink username={ settings.get('osuUsername') } />
            <div className="devices ml-auto">
              <i className="icon-mouse" />
              <i className="icon-keyboard" />
            </div>
          </div>
        }
        <Tabs />
      </header>
    );
  }
}
