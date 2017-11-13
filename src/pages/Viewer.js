import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Link } from 'inferno-router';

class NavItem extends Component {
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
      <div className="nav-bar">
        <ul className="nav">
          <NavItem label="Profile" path="/" />
          <NavItem label="Best Scores" path="/top-ranks" />
          <NavItem label="Activity" path="/recent" />
        </ul>
      </div>
    );
  }
}

class OsuProfileLink extends Component {
  render({ username }) {
    return (
      <a className="osu-profile-link" href={ `https://osu.ppy.sh/u/${username}` }>
        { username }
      </a>
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
        <div className="">
          <Navbar />
          { children }
        </div>
      </main>
    )
  }
}
