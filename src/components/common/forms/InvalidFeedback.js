import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

export default class InvalidFeedback extends Component {
  render({ label, errors=[] }) {
    return (
      <ul className="list-unstyled invalid-feedback">
      { errors.map(err => {
          if(err === 'required') {
            return <li>Please provide a valid { label }.</li>;
          }
        }) }
      </ul>
    );
  }
}
