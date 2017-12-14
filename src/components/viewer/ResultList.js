import Inferno from 'inferno';
import Component from 'inferno-component';
import { ResultListItem } from './';

export default class extends Component {
  render({ results=[], beatMaps }) {
    return (
      <ul className="result-list p-3">
        { results.map(result => <ResultListItem result={ result } beatMap={ beatMaps.get(result.beatmap_id)} />) }
      </ul>
    );
  }
}
