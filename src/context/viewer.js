import axios from 'axios';
import Config from '../config/config';
import User from '../stores/User';
import BestScores from '../stores/BestScores';
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
      beatMaps: new BeatMaps(request, state),
      user: new User(request, state),
      bestScores: new BestScores(request, state)
    }
  }
}
