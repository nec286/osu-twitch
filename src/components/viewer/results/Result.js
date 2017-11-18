import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { modEnum, abbreviate } from '../../../utils/';
import { Badge } from '../../common';
import { BeatMapLink } from '../beatmap';

class ScorePP extends Component {
  render({ value }) {
    return (
      <div className="ml-auto">{ Math.round(value) }pp</div>
    );
  }
}

class MaxCombo extends Component {
  render({ value, record }) {
    const percentage = value / record * 100;
    const style = {
      background: `linear-gradient(0deg, #bcaaa4, ${percentage}%, #d7ccc8 0%)`
    }
    return<Badge className="max-combo" style={ style } label={ value } />;
  }
}

class Mods extends Component {
  render({ mods }) {
    return( !!mods &&
      <div className="mods d-flex">
        { modEnum.read(mods).map(mod => <Badge label={ abbreviate(mod) } />) }
      </div>
    )
  }
}

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="list-group-item">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <BeatMapLink beatMap={ beatMap } />
            <p><small>{ prettydate.format(new Date(result.date)) }</small></p>
          </div>
          { !!result.pp && <ScorePP value={ result.pp } /> }
        </div>
        <div className="d-flex">
          { !!result.rank && <Badge className={ result.rank.toLowerCase() } label={ result.rank } /> }
          { !!result.maxcombo && <MaxCombo value={ result.maxcombo } record={ beatMap.max_combo } /> }
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
      </li>
    );
  }
}
