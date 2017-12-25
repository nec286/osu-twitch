import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

@connect(['store'])
class NavItem extends Component {
  @autobind
  handleClick() {
    const { store, value } = this.props;
    store.filters.mode = value;
  }

  render({ children, active }) {
    return (
      <li className="nav-item">
        <a href="#" className={ classNames('nav-link py-1', { active }) } onClick={ this.handleClick }>
          { children }
        </a>
      </li>
    );
  }
}

export default class extends Component {

  renderNavItem(value, label, active) {
    return <NavItem value={ value } active={ active }>{ label }</NavItem>;
  }

  render({ mode }) {
    const modes = ['osu!', 'Taiko', 'CtB', 'mania'];
    return (
      <div className="mode nav-fill">
        <ul className="nav fs-4">
          { modes.map((label, value) => this.renderNavItem(value, label, mode == value)) }
        </ul>
      </div>
    );
  }
}
