import Inferno from 'inferno';
import Component from 'inferno-component';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { Badge, BeatMapLink, ScorePP, Grade, Mods } from 'components/viewer';

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="result-list-item d-flex">
        <div className="summary">
          <BeatMapLink beatMap={ beatMap } />
          <p><small>{ distanceInWordsToNow(result.date, { addSuffix: true }) }</small></p>
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
        <div className="badges d-flex flex-column ml-auto">
          { !!result.rank && <Grade label={ result.rank } /> }
          { result.droppedFirstPlace && <Badge className="lost-first line-through" label="&nbsp;#1&nbsp;" /> }
          { !!result.globalRank && <Badge className="rank" label={ `#${result.globalRank}` } /> }
          { !!result.pp && <ScorePP value={ result.pp } /> }
          { !!result.maxcombo && <Badge className="max-combo" value={ `${result.maxcombo}x` } /> }
        </div>
      </li>
    );
  }
}
