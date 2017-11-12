import axios from 'axios';
import Config from '../config/config';
import User from '../stores/User';
import TopRanks from '../stores/TopRanks';
import RecentActivity from '../stores/RecentActivity';
import BeatMaps from '../stores/BeatMaps';

export default (state) => {
  const { ebs } = new Config();

  const request = axios.create({
    baseURL: `${ ebs.url }`,
    timeout: 10000
  });

  return {
    state,
    store: {
      user: new User(request, state),
      beatMaps: new BeatMaps(request, state),
      recentActivity: new RecentActivity(request, state),
      topRanks: new TopRanks(request, state)
    }
  }
}
