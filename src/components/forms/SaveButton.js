import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';

@connect(['store', 'state'])
export default class extends Component {
  render({ state }) {
    const { saveStatus } = state;
    return (
      <button type="submit" className="btn btn-primary" disabled={ saveStatus != null }>
        { saveStatus === 'saved' ? 'Saved!' : 'Save' }
      </button>
    );
  }
}
