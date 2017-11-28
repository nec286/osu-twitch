import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ username }) {
    const url = 'https://osu.ppy.sh/u/' + (username ? username : '');
    return (
      <a className="osu-profile-link" href={ url } target="_blank" nofollow>
        <i className="icon-link" /> osu! { username && `[${username}]` }
      </a>
    );
  }
}
