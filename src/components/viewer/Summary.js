import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from 'utils';

class TableRow extends Component {
  render({ label, value }) {
    return (
      <tr>
        <td className="pr-3 py-0 text-soften">{ label }</td>
        <td className="py-0">{ value }</td>
      </tr>
    );
  }
}

export default class extends Component {
  render({ profile }) {
    return (
      <table className="table table-sm w-50 mb-0 ml-auto fs-3">
        <TableRow label="Accuracy" value={ profile.accuracy ? (Number(profile.accuracy).toFixed(2) + '%') : '-' } />
        <TableRow label="Play Count" value={ formatNo(profile.playcount || 0) } />
        <TableRow label="Ranked Score" value={ formatNo(profile.ranked_score || 0) } />
        <TableRow label="Total Score" value={ formatNo(profile.total_score || 0) } />
        <TableRow label="Level" value={ Math.floor(profile.level || 0) } />
      </table>
    );
  }
}
