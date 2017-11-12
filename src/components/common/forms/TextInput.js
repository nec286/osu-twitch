import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import classNames from 'classnames';
import InvalidFeedback from './InvalidFeedback';

@connect(['state'])
export default class TextInput extends Component {
  @autobind
  handleChange(e) {
    const { name, state } = this.props;
    delete state.validation[name];
    state[name] = e.target.value;
  }

  render({ name, value, label, addon, state }) {
    const errors = state.validation[name];

    label = label || name.split(' ');

    return (
      <span>
        <label for={ name } className="col-form-label">{ label }</label>
        <div className={ classNames('input-group', { invalid: !!errors }) }>
          { !!addon && <div className="input-group-addon">{ addon }</div> }
          <input className="form-control" placeholder="slug" value={ value } onInput={ this.handleChange } />
        </div>
        {!!errors && <InvalidFeedback label={ label } errors={ errors } />}
      </span>
    );
  }
}
