import User from './User';
import BestScores from './BestScores';
import BeatMaps from './BeatMaps';
import Settings from './Settings';

export default class {
  constructor(request, state) {
    this.user = new User(request, state, this);
    this.beatMaps = new BeatMaps(request, state);
    this.bestScores = new BestScores(request, state, this);
    this.settings = new Settings(request, state);
  }

}
