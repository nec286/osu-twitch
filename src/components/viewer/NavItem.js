import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

export default class extends Component {
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
