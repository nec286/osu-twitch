import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    const percentage = Math.round((value % 1) * 100);
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${ percentage }%` }} />
        <div className="label">Level { Math.floor(value) }</div>
      </div>
    );
  }
}
