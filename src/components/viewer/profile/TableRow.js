import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ label, value }) {
    return (
      <tr>
        <td>{ label }</td>
        <td className="text-right">{ value }</td>
      </tr>
    );
  }
}
