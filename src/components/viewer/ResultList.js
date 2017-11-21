import Inferno from 'inferno';
import Component from 'inferno-component';
import { ResultListItem } from './';

export default class extends Component {
  render({ results=[], beatMaps }) {
    return (
      <ul className="result-list">
        { results.map(result => <ResultListItem result={ result } beatMap={ beatMaps.get(result.beatmap_id)} />) }
      </ul>
    );
  }
}
