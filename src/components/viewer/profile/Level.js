import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    const nextLevel = Math.round((value % 1) * 100);
    return (
      <div className="grade-badge">
        <div className="badge">
          { Math.floor(value) }
        </div>
        <small>LVL</small>
      </div>
    );
  }
}


import classNames from 'classnames';
class GradeBadge extends Component {
  render({ grade, label }) {
    return (
      <div className="grade-badge">
        <div className={ classNames('badge', grade) }>{ grade.toUpperCase() }</div>
        { !!label && <div className="label">{ label }</div> }
      </div>
    );
  }
}
