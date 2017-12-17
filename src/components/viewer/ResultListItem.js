import Inferno from 'inferno';
import Component from 'inferno-component';
import { dateFromNow } from 'utils';
import { Badge, BeatMapLink, Grade, Mods } from 'components/viewer';

export default class extends Component {
  render({ result, beatMap }) {
    return( beatMap &&
      <li className="result-list-item d-flex p-1 mx-2 mt-2">
        <div className="mr-3">
          <BeatMapLink beatMap={ beatMap } />
          <small className="d-block text-soften">{ dateFromNow(result.date, { addSuffix: true }) }</small>
          { !!result.enabled_mods && <Mods mods={ result.enabled_mods } /> }
        </div>
        <div className="d-flex flex-column ml-auto">
          { !!result.rank && <Grade label={ result.rank } /> }
          { result.droppedFirstPlace && <Badge className="lost-first line-through" label="&nbsp;#1&nbsp;" /> }
          { !!result.globalRank && <Badge className="rank" label={ `#${result.globalRank}` } /> }
          { !!result.pp && <Badge value={ Math.round(result.pp) + 'pp' } /> }
          { !!result.maxcombo && <Badge className="max-combo" value={ `${result.maxcombo}x` } /> }
        </div>
      </li>
    );
  }
}
