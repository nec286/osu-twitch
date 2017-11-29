import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ value }) {
    return <span>{ Math.floor(value || 0).toString() }</span>;
  }
}
