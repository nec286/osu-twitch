import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ className, style={}, label, value }) {
    return (
      <div className={ classNames('badge d-flex flex-column justify-content-center', className) } style={ style }>
        <div className="label">{ label }</div>
        { !!value && <div className="value">{ value }</div> }
      </div>
    );
  }
}
