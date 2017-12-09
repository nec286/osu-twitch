import Errors from './Errors';
import Profile from './Profile';
import BestScores from './BestScores';
import BeatMaps from './BeatMaps';
import Settings from './Settings';
import Filters from './Filters';

export default class {
  constructor(request, state) {
    this.errors = new Errors(state);
    this.profile = new Profile(request, state, this);
    this.beatMaps = new BeatMaps(request, state);
    this.bestScores = new BestScores(request, state, this);
    this.settings = new Settings(request, state);
    this.filters = new Filters(state);
  }

}
