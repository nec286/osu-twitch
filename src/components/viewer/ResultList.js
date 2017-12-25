import Inferno from 'inferno';
import Component from 'inferno-component';
import { ResultListItem } from './';

export default class extends Component {
  render({ results=[], beatMaps }) {
    return (
      <ul className="result-list px-0 mb-0 fs-2">
        { results.map(result => <ResultListItem result={ result } beatMap={ beatMaps.get(result.beatmap_id)} />) }
      </ul>
    );
  }
}
