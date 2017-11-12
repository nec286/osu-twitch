import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import autobind from 'autobind-decorator';
// import { Activity } from '../components/viewer/recent';

class ActivityListItem extends Component {
  render({ item, beatMap }) {
    return (
      <li className="list-group-item">
        { beatMap && beatMap.title }
      </li>
    );
  }
}

class ActivityList extends Component {
  render({ activity, beatMaps }) {
    return (
      <ul className="list-group">
        { activity.map(item => <ActivityListItem item={ item } beatMap={ beatMaps.get(item.beatmap_id) } />) }
      </ul>
    );
  }
}

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
        { !!recentActivity && <ActivityList activity={ recentActivity } beatMaps={ beatMaps } /> }
        <pre>{ beatMaps.size }</pre>
      </div>
    );
  }
}
