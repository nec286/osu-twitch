import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { Progress, BeatMapLink, GradeBadge } from './';

class ScorePP extends Component {
  render({ value }) {
    return (
      <div className="ml-auto">{ Math.round(value) }pp</div>
    );
  }
}

class MaxCombo extends Component {
  render({ value, record }) {
    return(
      <Progress value={ record / value * 100 } label={ value } />
    );
  }
}

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="list-group-item">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <BeatMapLink beatMap={ beatMap } />
            <small>{ prettydate.format(new Date(result.date)) }</small>
          </div>
          { !!result.pp && <ScorePP value={ result.pp } /> }
        </div>
        <div className="d-flex">
          <GradeBadge grade={ result.rank } />
          <MaxCombo value={ result.maxcombo } record={ beatMap.max_combo } />
          <div>MODS</div>
        </div>
      </li>
    );
  }
}
