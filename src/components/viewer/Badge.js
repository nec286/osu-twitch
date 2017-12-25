import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render() {
    const { className, label, ...props} = this.props;
    const classes = classNames(className, 'badge d-flex flex-column fs-2 justify-content-center font-weight-normal');
    return (
      <div className={ classes } { ...props }>
        <div className="label">{ label }</div>
      </div>
    );
  }
}
