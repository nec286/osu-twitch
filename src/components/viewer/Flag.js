import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ country='' }) {
    return <i className={ classNames('flag-icon flag-icon-squared', `flag-icon-${ country.toLowerCase() }`) } />;
  }
}
