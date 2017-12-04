import Inferno from 'inferno';
import Component from 'inferno-component';
import { OsuProfileLink } from 'components/viewer';

class Avatar extends Component {
  render({ profile }) {
    const src = profile.avatar_url || 'assets/img/avatar.png';
    return <img className="avatar" src={ src } />;
  }
}

export default class extends Component {
  render({ profile }) {
    return (
      <header>
        {!!profile &&
          <div className="d-flex">
            <Avatar profile={ profile } />
            <OsuProfileLink username={ profile.username } />
          </div>
        }
      </header>
    );
  }
}
