import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ name, value, label, defaultChecked=false, onChange }) {
    return (
      <div className="form-check form-check-inline">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name={ name } value={ value } onChange={ onChange } defaultChecked={ defaultChecked } /> { label }
        </label>
      </div>
    );
  }
}
