import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Banner, Tabs, Error } from 'components/viewer';

@connect(['state', 'store'])
export default class extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.user.fetch();
  }

  render({ state, children }) {
    const { lastError, user } = state;
    return (
      <main className="container-fluid p-0">
        <Banner user={ user } />
        <Tabs />
        <div className="page">
          { !lastError ? children : <Error error={ lastError } /> }
        </div>
      </main>
    );
  }
}
