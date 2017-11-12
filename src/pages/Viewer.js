import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Link } from 'inferno-router';

class NavLink extends Component {
  render({ label, path }) {
    return (
      <li className="nav-item">
        <Link className="nav-link" activeClassName="active" to={ path }>
          { label }
        </Link>
      </li>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <NavLink label="Profile" path="/" />
        <NavLink label="Top Ranks" path="/top-ranks" />
        <NavLink label="Recent" path="/recent" />
      </ul>
    );
  }
}

class OsuProfileLink extends Component {
  render({ username }) {
    return (
      <a href={ `https://osu.ppy.sh/u/${username}` }>{ username }</a>
    );
  }
}

@connect(['state', 'store'])
export default class Viewer extends Component {
  async componentWillMount() {
    const { store, state } = this.props;
    store.user.fetch('rafis');
  }

  render({ state, store, children }) {
    const { user } = state;
    return ( !!user.username &&
      <main>
        <OsuProfileLink username={ user.username } />
        <Navbar />
        { children }
      </main>
    )
  }
}
