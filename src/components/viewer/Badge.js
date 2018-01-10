import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render() {
    const { className, children, ...props} = this.props;
    const classes = classNames(className, 'badge d-flex flex-column fs-2');
    return (
      <div className={ classes } { ...props }>{ children }</div>
    );
  }
}
