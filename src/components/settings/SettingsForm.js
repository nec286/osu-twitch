/*
import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import TextInput from '../forms/TextInput';

@connect(['store', 'state'])
export default class SettingsForm extends Component {
  @autobind
  handleSubmit(e) {
    const { store, state } = this.props;

    if(!state.foo) {
      state.validation = { foo: ['required'] }
    } else {
      store.settings.save();
    }
    e.preventDefault();
  }

  render({ state }) {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextInput name="Foo" value={ 'bar' } addon="foo" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}
*/
