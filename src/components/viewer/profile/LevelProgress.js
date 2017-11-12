import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic, Progress } from '../../common';

export default class extends Component {
  render({ level }) {
    return (
      <tr>
        <td className="border-0" colSpan={2}>
          <Progress value={ Math.round((level % 1) * 100) } />
        </td>
      </tr>
    );
  }
}
