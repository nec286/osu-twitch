import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';

@connect(['store'])
export default class extends Component {
  @autobind
  handleChange(e) {
    const { store, onChange } = this.props;
    store.topRanks.filter = e.target.value;
    onChange(e);
  }

  render({ mode }) {
    return (
      <select onChange={ this.handleChange } value={ mode }>
        <option value="0">osu!</option>
        <option value="1">Taiko</option>
        <option value="2">CtB</option>
        <option value="3">osu!mania</option>
      </select>
    );
  }
}
