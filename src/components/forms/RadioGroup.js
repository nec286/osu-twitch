import Inferno from 'inferno';
import Component from 'inferno-component';
import { RadioButton } from './';

export default class extends Component {
  render({ name, labels, value, onChange }) {
    return (
      <div className="radio-group">
        { labels.map((label, i) => <RadioButton name={ name } value={ i } label={ label } onChange={ onChange } defaultChecked={ i == value } />) }
      </div>
    );
  }
}
