import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ label='', value }) {
    label = label.toLowerCase();
    switch(label) {
      case 'ssh':
      label = 'ss';
      break;
      case 'sh':
      label = 's';
      break;
    }
    return <Badge className={ classNames('grade', label)} label={ label.toUpperCase() } value={ value } />;
  }
}
