import { observable, action, computed } from 'mobx';
import User from './User';
import BestScores from './BestScores';
import RecentActivity from './RecentActivity';
import BeatMaps from './BeatMaps';
import Settings from './Settings';

export default class {
  constructor(request, state) {
    this.user = new User(request, state);
    this.beatMaps = new BeatMaps(request, state);
    this.recentActivity = new RecentActivity(request, state, this);
    this.bestScores = new BestScores(request, state, this);
    this.settings = new Settings(request, state);
  }

}
