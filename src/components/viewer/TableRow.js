import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ label, value }) {
    return (
      <tr>
        <td className="px-3 py-2 text-soften">{ label }</td>
        <td className="px-3 py-2 text-right">{ value }</td>
      </tr>
    );
  }
}
