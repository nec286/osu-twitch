import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render() {
    const { className, label, value, ...props} = this.props;
    const classes = classNames(className, 'badge d-flex flex-column fs-2 justify-content-center font-weight-normal');
    return (
      <div className={ classes } { ...props }>
        <div>{ label }</div>
        { !!value && <div className="mt-1">{ value }</div> }
      </div>
    );
  }
}
