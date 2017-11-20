import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { Badge, BeatMapLink, ScorePP, MaxCombo, Mods } from 'components/viewer';

class Grade extends Component {
  render({ value }) {
    value = value.toLowerCase();
    switch(value) {
      case 'ssh':
      value = 'ss';
      break;
      case 'sh':
      value = 's';
      break;
    }
    return <Badge className={ value } label={ value.toUpperCase() } />;
  }
}

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="list-group-item">
        <div className="summary d-flex">
          <div className="d-flex flex-column">
            <BeatMapLink beatMap={ beatMap } />
            <p><small>{ prettydate.format(new Date(result.date)) }</small></p>
          </div>
          { !!result.pp && <ScorePP className="ml-auto" value={ result.pp } /> }
        </div>
        <div className="badges d-flex">
          { !!result.rank && <Grade value={ result.rank } /> }
          { result.droppedFirstPlace && <Badge className="line-through" label="#1" /> }
          { !!result.globalRank && <Badge className="global-rank" label={ `#${result.globalRank}` } /> }
          { !!result.maxcombo && <MaxCombo value={ result.maxcombo } record={ beatMap.max_combo } /> }
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
      </li>
    );
  }
}
