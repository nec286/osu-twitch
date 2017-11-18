import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ value, className }) {
    return (
      <span className={ classNames('font-weight-bold', className) }>
        { Math.round(value) }pp
      </span>
    );
  }
}
