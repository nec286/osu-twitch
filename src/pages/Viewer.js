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

class Tabs extends Component {
  render() {
    return (
      <div className="nav-tabs nav-fill">
        <ul className="nav mr-auto">
          <NavItem label="Profile" path="/" />
          <NavItem label="Top" path="/best" />
        </ul>
      </div>
    );
  }
}

class Banner extends Component {
  render({ user }) {
    return(
      <h1>
        <OsuProfileLink username={ !!user && user.username } />
      </h1>
    );
  }
}


class OsuProfileLink extends Component {
  render({ username }) {
    return (
      <a className="osu-profile-link" href={ `https://osu.ppy.sh/u/${username}` } target="_blank" nofollow>
        { username }
      </a>
    );
  }
}

class Error extends Component {
  render({ error }) {
    return (
      <div className="error">
        <div>Unable to load extension { '(*ﾉ∀`*)' }</div>
      </div>
    );
  }
}

@connect(['state', 'store'])
export default class extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.user.fetch('rafis');
  }

  render({ state, children }) {
    const { lastError, isFetchingUser, user } = state;
    return (
      <main className="container-fluid p-0">
        <Banner user={ user } />
        <Tabs />
        { !!lastError && <Error error={ lastError } /> }
        { !isFetchingUser && !lastError && children }
      </main>
    )
  }
}
