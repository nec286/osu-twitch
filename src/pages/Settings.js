import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import Form from 'components/settings/Form';

@connect(['state', 'store'])
export default class extends Component {
  async componentWillMount() {
    const { store } = this.props;
    store.settings.fetch();
  }

  render({ state }) {
    const { settings, validation } = state;
    return (
      <main className="container-fluid p-0">
        <Form settings={ settings } validation={ validation } />
      </main>
    );
  }
}
