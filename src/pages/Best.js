import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';

@connect(['state', 'store'])
export default class Viewer extends Component {
  componentWillMount() {
    const { store, state } = this.props;
    // store.user.fetch('nec286');
  }

  render({ state, store }) {
    const { user } = state;
    return (
      <div className="best">
        BEST!!!
      </div>
    )
  }
}
