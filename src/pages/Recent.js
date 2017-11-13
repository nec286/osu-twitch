import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
import { Results } from '../components/common';

@connect(['state', 'store'])
export default class extends Component {
  async componentWillMount() {
    const { store } = this.props;
    const data = await store.recentActivity.fetch('rafis');
    store.beatMaps.fetchAll(_.map(data, 'beatmap_id'));
  }

  render({ state }) {
    const { recentActivity, beatMaps } = state;

    return (
      <div className="recent">
        { !!recentActivity && <Results results={ recentActivity } beatMaps={ beatMaps } /> }
        <pre style={{ display: 'none' }}>{ beatMaps.size }</pre>
      </div>
    );
  }
}
