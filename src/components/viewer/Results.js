import Inferno from 'inferno';
import Component from 'inferno-component';
import { dateFromNow } from 'utils';
import { Badge, BeatMapLink, Grade, Mods } from 'components/viewer';

class ListItem extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="d-flex px-1 mx-2 mt-2">
        <div className="mr-3">
          <BeatMapLink beatMap={ beatMap } />
          <small className="d-block text-soften">{ dateFromNow(result.date, { addSuffix: true }) }</small>
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
        <div className="d-flex flex-column ml-auto fs-2">
          { !!result.rank && <Grade value={ result.rank } /> }
          { result.droppedFirstPlace && <Badge className="lost-first text-line-through"> #1 </Badge> }
          { !!result.globalRank && <Badge className="rank">{ `#${result.globalRank}` }</Badge> }
          { !!result.pp && <Badge>{ Math.round(result.pp) + 'pp' }</Badge> }
          { !!result.maxcombo && <Badge className="max-combo">{ `${result.maxcombo}x` }</Badge> }
        </div>
      </li>
    );
  }
}

export default class extends Component {
  render({ results=[], beatMaps }) {
    return (
      <ul className="results px-0 pt-2 mb-0">
        { results.map(result => <ListItem result={ result } beatMap={ beatMaps.get(result.beatmap_id)} />) }
      </ul>
    );
  }
}
