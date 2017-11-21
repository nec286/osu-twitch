import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    value = value.toLowerCase();
    switch(value) {
      case 'ssh':
      value = 'ss';
      break;
      case 'sh':
      value = 's';
      break;
    }
    return <Badge className={ value } label={ value.toUpperCase() } />;
  }
}
