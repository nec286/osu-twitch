import { action } from 'mobx';

export default class {
  constructor(state) {
    this.state = state;
  }

  set profile(data) {
    const { settings } = this.state;
    const mode = settings.get('mode') || 0;
    this.addBeatmaps(data.beatMaps);
    this.state.profiles.set(mode, Object.assign(this.state.profiles.get(mode), data.user));
    this.lastRefreshTime = Date.now();
  }

  @action addBeatmaps(beatMaps=[]) {
    beatMaps.forEach(beatMap => {
      this.state.beatMaps.set(beatMap.beatmap_id, beatMap);
    });
  }

  set lastRefreshTime(lastRefreshTime) {
    this.state.lastRefreshTime = lastRefreshTime;
  }
}
