import Inferno from 'inferno';
import Component from 'inferno-component';
import { Result } from './';

export default class extends Component {
  render({ results=[], beatMaps }) {
    console.log(beatMaps.size);
    return (
      <ul className="list-group">
        { results.map(result => <Result result={ result } beatMap={ beatMaps.get(result.beatmap_id)} />) }
      </ul>
    );
  }
}
