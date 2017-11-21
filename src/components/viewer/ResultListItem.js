import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { Badge, BeatMapLink, ScorePP, Grade, Mods } from 'components/viewer';

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="result-list-item d-flex">
        <div className="summary">
          <BeatMapLink beatMap={ beatMap } />
          <p><small>{ prettydate.format(new Date(result.date)) }</small></p>
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
        <div className="badges d-flex flex-column ml-auto">
          { !!result.rank && <Grade label={ result.rank } /> }
          { result.droppedFirstPlace && <Badge className="rank line-through" label="#1" /> }
          { !!result.globalRank && <Badge className="rank" label={ `#${result.globalRank}` } /> }
          { !!result.pp && <ScorePP value={ result.pp } /> }
          { !!result.maxcombo && <Badge value={ `${result.maxcombo}x` } /> }
        </div>
      </li>
    );
  }
}
