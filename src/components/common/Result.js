import Inferno from 'inferno';
import Component from 'inferno-component';
import prettydate from 'pretty-date';
import { Progress, BeatMapLink, GradeBadge } from './';

const None = 0;
const NoFail = 1;
const Easy = 2;
const NoVideo = 4; // Not used anymore; but can be found on old plays like Mesita on b/78239
const Hidden = 8;
const HardRock = 16;
const SuddenDeath = 32;
const DoubleTime = 64;
const Relax = 128;
const HalfTime = 256;
const Nightcore = 512; // Only set along with DoubleTime. i.e = NC only gives 576
const Flashlight = 1024;
const Autoplay = 2048;
const SpunOut = 4096;
const Relax2 = 8192;	// Autopilot?
const Perfect = 16384; // Only set along with SuddenDeath. i.e = PF only gives 16416
const Key4 = 32768;
const Key5 = 65536;
const Key6 = 131072;
const Key7 = 262144;
const Key8 = 524288;
const keyMod = Key4 | Key5 | Key6 | Key7 | Key8;
const FadeIn = 1048576;
const Random = 2097152;
const LastMod = 4194304;
const FreeModAllowed = NoFail | Easy | Hidden | HardRock | SuddenDeath | Flashlight | FadeIn | Relax | Relax2 | SpunOut | keyMod;
const Key9 = 16777216;
const Key10 = 33554432;
const Key1 = 67108864;
const Key3 = 134217728;
const Key2 = 268435456

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
      <Progress value={ value / record * 100 } label={ value } />
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
