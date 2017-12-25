import Inferno from 'inferno';
import Component from 'inferno-component';
import { avatarURL } from 'utils'

export default class extends Component {
  handleError() {
    this.onerror = null;
    this.src = 'assets/img/avatar.png';
  }

  render({ username }) {
    return <img className="avatar z-depth-3" src={ avatarURL(username) } onError={ this.handleError } />;
  }
}
