import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ className='', label='', value }) {
    let displayLabel = label;
    label = label.toLowerCase();
    switch(label) {
    case 'ssh':
    case 'x':
    case 'xh':
      displayLabel = 'SS';
      break;
    case 'sh':
      displayLabel = 'S';
      break;
    }
    return <Badge className={ classNames('grade', className, label)} label={ displayLabel } value={ value } />;
  }
}
