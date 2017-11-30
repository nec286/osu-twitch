import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ value }) {
    return <span>{ value ? (Number(value).toFixed(2) + '%') : '-' }</span>;
  }
}
