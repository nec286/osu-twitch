import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ className='', value='' }) {
    let label = value;
    switch(value) {
    case 'SSH':
    case 'X':
    case 'XH':
      label = 'SS';
      break;
    case 'SH':
      label = 'S';
      break;
    }
    return <Badge className={ classNames('grade', className, value.toLowerCase())}>{ label }</Badge>;
  }
}
