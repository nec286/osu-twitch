import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

class InvalidFeedback extends Component {
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

class TextInput extends Component {
  render({ name, label, value, errors, onChange }) {
    label = label || name.split(' ');
    return (
      <span>
        <label for={ name } className="col-form-label">{ label }</label>
        <div className={ classNames('input-group', { invalid: !!errors }) }>
          <input className="form-control" name={ name } placeholder={ label } value={ value } onInput={ onChange } />
        </div>
        {!!errors && <InvalidFeedback label={ label } errors={ errors } />}
      </span>
    );
  }
}

@connect(['store', 'state'])
class SaveButton extends Component {
  render({ state }) {
    const { saveStatus } = state;
    return (
      <button type="submit" className="btn btn-primary" disabled={ saveStatus != null }>
        { saveStatus === 'saved' ? 'Saved!' : 'Save' }
      </button>
    );
  }
}

@connect(['store'])
class SettingsForm extends Component {
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
  renderTextInput(name, label) {
    const { settings, validation } = this.props;
    return (
      <TextInput name={ name } label={ label } value={ settings.get(name) } errors={ validation.get(name) } onChange={ this.handleChange } />
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

@connect(['state', 'store'])
export default class extends Component {
  async componentWillMount() {
    const { store, state } = this.props;
    store.settings.fetch(state.twitchAuth.channelId);
  }

  render({ state }) {
    const { settings, validation } = state;
    return (
      <main>
        <SettingsForm settings={ settings } validation={ validation } />
      </main>
    );
  }
}
