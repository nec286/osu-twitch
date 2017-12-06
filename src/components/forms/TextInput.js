import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { InvalidFeedback } from 'components/forms';

export default class extends Component {
  render({ name, label, value, addOn, errors, onChange }) {
    label = label || name.split(' ');
    return (
      <span>
        <label for={ name } className="col-form-label">{ label }</label>
        <div className={ classNames('input-group', { invalid: !!errors }) }>
          { !!addOn && <div className="input-group-addon">{ addOn }</div> }
          <input className="form-control" type="text" name={ name } placeholder={ label } value={ value } onInput={ onChange } />
        </div>
        {!!errors && <InvalidFeedback label={ label } errors={ errors } />}
      </span>
    );
  }
}
