import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import classNames from 'classnames';
import SettingsForm from 'components/settings/SettingsForm';

@connect(['state', 'store'])
export default class extends Component {
  async componentWillMount() {
    const { store, state } = this.props;
    store.settings.fetch();
  }

  render({ state }) {
    const { settings, validation } = state;
    return (
      <main className="container-fluid p-0">
        <SettingsForm settings={ settings } validation={ validation } />
      </main>
    );
  }
}
