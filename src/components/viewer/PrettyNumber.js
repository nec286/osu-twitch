import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from 'utils';

export default class extends Component {
  render({ value }) {
    return <span>{ formatNo(value || 0) }</span>;
  }
}
