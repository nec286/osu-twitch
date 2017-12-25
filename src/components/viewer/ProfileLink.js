import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ username, className }) {
    const url = 'https://osu.ppy.sh/u/' + (username ? username : '');
    return (
      <a className={ classNames(className) } href={ url } target="_blank" nofollow>
        { username }
      </a>
    );
  }
}
