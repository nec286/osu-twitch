import Inferno from 'inferno';
import Component from 'inferno-component';

class Score extends Component {
  render({ score, beatMap }) {
    console.log(beatMap);
    // https://osu.ppy.sh/b/351190?m=0
    return(
      <li className="list-group-item">
        { beatMap.title }
        { score.rank }
      </li>
    );
  }
}

export default class extends Component {
  render({ scores, beatMaps }) {
    return (
      <ul className="list-group">
        { scores.map(score => <Score score={ score } beatMap={ beatMaps[score.beatmap_id]} />) }
      </ul>
    );
  }
}
