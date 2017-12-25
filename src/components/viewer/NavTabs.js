import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class NavItem extends Component {
  render({ children, to }) {
    return (
      <li className="nav-item fs-2 text-uppercase">
        <Link className="nav-link" activeClassName="active" to={ to }>
          { children }
        </Link>
      </li>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <div className="nav-tabs nav-fill">
        <ul className="nav mr-auto">
          <NavItem to="/">Profile</NavItem>
          <NavItem to="/activity">Activity</NavItem>
          <NavItem to="/best">Best</NavItem>
        </ul>
      </div>
    );
  }
}
