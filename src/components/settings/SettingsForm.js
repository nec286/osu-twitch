import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { TextInput, SaveButton } from 'components/forms';

class RadioButton extends Component {
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

class RadioGroup extends Component {
  render({ name, labels, value, onChange }) {
    console.log('value', value);
    return (
      <div className="radio-group">
        { labels.map((label, i) => <RadioButton name={ name } value={ i } label={ label } onChange={ onChange } defaultChecked={ i == value } />) }
      </div>
    );
  }
}

@connect(['store'])
export default class extends Component {
  @autobind
  handleChange(e) {
    console.log('handleChange');
    const { store } = this.props;
    store.settings[e.target.name] = e.target.value;
    store.settings.clearValidation(e.target.name);
  }

  @autobind
  handleSubmit(e) {
    const { store } = this.props;
    store.settings.validateAndSave();
    e.preventDefault();
  }

  @autobind
  renderTextInput(name, label, addOn) {
    const { settings, validation } = this.props;
    const value = settings.get(name);
    const errors = validation.get(name);
    return (
      <TextInput name={ name } label={ label } value={ value } addOn={ addOn } errors={ errors } onChange={ this.handleChange } />
    );
  }

  render({ settings }) {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          { this.renderTextInput('osuUsername', 'osu! username') }
        </div>
        <fieldset className="form-group">
          <legend>Default mode</legend>
          <RadioGroup name="mode" labels={ ['osu!', 'Taiko', 'CtB', 'osu!mania'] } value={ settings.get('mode') } onChange={ this.handleChange } />
        </fieldset>
        <SaveButton />
      </form>
    );
  }
}
