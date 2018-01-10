import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class NavItem extends Component {
  render({ children, to }) {
    return (
      <li className="nav-item fs-4 text-uppercase">
        <Link className="nav-link p-1 border-0" activeClassName="active" to={ to }>
          { children }
        </Link>
      </li>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <div className="nav-tabs nav-fill w-100 mb-0 border-0">
        <ul className="nav mr-auto">
          <NavItem to="/">Recent</NavItem>
          <NavItem to="/best">Best</NavItem>
        </ul>
      </div>
    );
  }
}
