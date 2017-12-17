import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  handleError() {
    this.onerror = null;
    this.src = 'assets/img/avatar.png';
  }

  render({ username }) {
    const src = `https://storage.googleapis.com/osu-twitch/avatars/${username.toLowerCase()}`;
    return <img className="avatar z-depth-3" src={ src } onError={ this.handleError } />;
  }
}
