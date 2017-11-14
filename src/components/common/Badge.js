import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ className, style={}, label, value }) {
    return (
      <div className={ classNames('badge', className) } style={ style }>
        <div>{ label.toUpperCase() }</div>
        { !!value && <small>{ value }</small> }
      </div>
    );
  }
}
