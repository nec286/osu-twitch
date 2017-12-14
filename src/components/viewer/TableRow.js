import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ label, value }) {
    return (
      <tr>
        <td className="px-3 py-1">{ label }</td>
        <td className="px-3 py-1 text-right">{ value }</td>
      </tr>
    );
  }
}
