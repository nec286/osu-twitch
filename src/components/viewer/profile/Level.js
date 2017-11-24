import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    const style = { background: `linear-gradient(0deg, #D2B4DE, ${Math.round((value % 1) * 100)}%, #faf9fa 0%)` };
    return <Badge className="level" style={ style } label={ Math.floor(value).toString() } value={ 'LVL' } />;
  }
}
