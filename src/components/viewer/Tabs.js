import Inferno from 'inferno';
import Component from 'inferno-component';
import { NavItem } from 'components/viewer';

export default class extends Component {
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
