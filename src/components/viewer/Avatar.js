import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  handleError() {
    this.onerror = null;
    this.src = 'assets/img/avatar.png';
  }

  render({ profile }) {
    const src = `https://storage.googleapis.com/osu-twitch/avatars/${profile.username.toLowerCase()}`;
    return <img className="avatar" src={ src } onError={ this.handleError } />;
  }
}
