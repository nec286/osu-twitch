import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { modEnum, abbreviate } from '../../utils/';
import { Progress, BeatMapLink, Badge } from './';

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
      background: `linear-gradient(0deg, pink, ${percentage}%, #e0e0e0 0%)`
    }
    return<Badge className="max-combo" style={ style } label={ value } />;
  }
}

class Mods extends Component {
  render({ mods }) {
    return( !!mods &&
      <div className="mods">
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
            <p>{ prettydate.format(new Date(result.date)) }</p>
          </div>
          { !!result.pp && <ScorePP value={ result.pp } /> }
        </div>
        <div className="d-flex">
          <Badge className={ result.rank.toLowerCase() } label={ result.rank } />
          <MaxCombo value={ result.maxcombo } record={ beatMap.max_combo } />
          <Mods mods={ result.enabled_mods } />
        </div>
      </li>
    );
  }
}
