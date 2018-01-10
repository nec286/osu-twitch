import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';
import { modEnum } from 'utils';

export default class extends Component {
  render({ mods }) {
    return( !!mods &&
      <div className="mods py-1 d-flex">
        { modEnum.read(mods).map(mod => <Badge className="pl-0 pr-2">{ mod }</Badge>) }
      </div>
    );
  }
}
