import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';

// Common
class BeatMapLink extends Component {
  render({ beatMap }) {
    const url = `https://osu.ppy.sh/b/${beatMap.beatmap_id}?m=${beatMap.mode}`;
    return (
      <a href={ url } target="_blank" nofollow>
        { beatMap.title }
      </a>
    );
  }
}

class LetterRank extends Component {
  render({ rank }) {
    return (
      <pre>{ rank }</pre>
    );
  }
}

class ScoreListItem extends Component {
  render({ score, beatMap }) {
    // https://osu.ppy.sh/b/351190?m=0
    return( beatMap &&
      <li className="list-group-item">
        <BeatMapLink beatMap={ beatMap } />
        <div>Version: { beatMap.version }</div>
        <LetterRank rank={ score.rank } />
        <div>{ prettydate.format(new Date(score.date)) }</div>
        <div>{ score.pp }pp</div>
        <div>Max combo { score.maxcombo }</div>
        <div>Perfect { score.perfect }</div>
        <div>Mods { score.enabled_mods }</div>
      </li>
    );
  }
}

export default class extends Component {
  render({ scores, beatMaps }) {
    return (
      <ul className="list-group">
        { scores.map(score => <ScoreListItem score={ score } beatMap={ beatMaps.get(score.beatmap_id)} />) }
      </ul>
    );
  }
}
