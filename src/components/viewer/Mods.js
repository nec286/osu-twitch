import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';
import { modEnum } from 'utils';

export default class extends Component {
  render({ mods }) {
    return( !!mods &&
      <div className="mods d-flex">
        { modEnum.read(mods).map(mod => <Badge label={ mod } />) }
      </div>
    );
  }
}
