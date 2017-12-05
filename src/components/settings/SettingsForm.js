import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { TextInput, SaveButton } from 'components/forms';

@connect(['store'])
export default class extends Component {
  @autobind
  handleChange(e) {
    const { store } = this.props;

    if(e.target.name === 'avatarUrl') {
      e.target.value = e.target.value.split('/').reverse()[0];
    }

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

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          { this.renderTextInput('osuUsername', 'osu! username') }
        </div>
        <SaveButton />
      </form>
    );
  }
}
