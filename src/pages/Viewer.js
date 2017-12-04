import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Tabs, Error, Header } from 'components/viewer';

@connect(['state', 'store'])
export default class extends Component {
  render({ state, children }) {
    const { lastError, profiles } = state;

    return (
      <div className="container-fluid p-0">
        <Header profile={ profiles.get(0) } />
        <Tabs />
        <main className="page">
          { !lastError ? children : <Error error={ lastError } /> }
        </main>
      </div>
    );
  }
}
