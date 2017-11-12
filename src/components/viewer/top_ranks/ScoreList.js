import Inferno from 'inferno';
import Component from 'inferno-component';

class ScoreListItem extends Component {
  render({ score, beatMap }) {
    // https://osu.ppy.sh/b/351190?m=0
    return(
      <li className="list-group-item">
        { beatMap && beatMap.title }
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
