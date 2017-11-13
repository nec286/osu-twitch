import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    const nextLevel = Math.round((value % 1) * 100);
    return (
      <div className="grade-badge">
        <div className="badge grade">
          { Math.floor(value) }
          <div />
        </div>
        <div className="badge value">LVL</div>
      </div>
    );
  }
}
