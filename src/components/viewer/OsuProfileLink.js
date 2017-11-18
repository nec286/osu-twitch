import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ username }) {
    return (
      <a className="osu-profile-link" href={ `https://osu.ppy.sh/u/${username}` } target="_blank" nofollow>
        osu! Profile
      </a>
    );
  }
}
