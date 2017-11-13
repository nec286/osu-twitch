import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';

export default class extends Component {
  render({ grade, label }) {
    return (
      <div className="grade-badge">
        <div className={ classNames('badge', grade) }>
          { grade.toUpperCase() }
        </div>
        { !!label && <small>{ label }</small> }
      </div>
    );
  }
}
