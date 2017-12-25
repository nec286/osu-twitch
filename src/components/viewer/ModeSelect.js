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
      <li className="nav-item fs-2">
        <a href="#" className={ classNames('nav-link py-1', { active }) } onClick={ this.handleClick }>
          { children }
        </a>
      </li>
    );
  }
}

export default class extends Component {
  render({ mode }) {
    return (
      <div className="mode-select nav-fill">
        <ul className="nav">
          <NavItem value={0} active={ mode == 0 }>osu!</NavItem>
          <NavItem value={1} active={ mode == 1 }>Taiko</NavItem>
          <NavItem value={2} active={ mode == 2 }>CtB</NavItem>
          <NavItem value={3} active={ mode == 3 }>mania</NavItem>
        </ul>
      </div>
    );
  }
}
