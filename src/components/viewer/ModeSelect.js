import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ mode, onChange }) {
    return (
      <div className="mode-select px-3 py-2">
        <select onChange={ onChange } value={ mode }>
          <option value="0">osu!</option>
          <option value="1">Taiko</option>
          <option value="2">CtB</option>
          <option value="3">osu!mania</option>
          </select>
      </div>
    );
  }
}
