import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { SaveButton } from './';
import { TextInput, RadioGroup } from 'components/forms';

@connect(['store'])
export default class extends Component {
  @autobind
  handleChange(e) {
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
          <legend>Default - <small>The play mode that will be selected by default when the extension is loaded and receive real-time updates.</small></legend>
          <RadioGroup name="mode" labels={ ['osu!', 'Taiko', 'CtB', 'osu!mania'] } value={ settings.get('mode') || 0 } onChange={ this.handleChange } />
        </fieldset>
        <SaveButton />
      </form>
    );
  }
}
