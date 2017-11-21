import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    const style = { background: `linear-gradient(0deg, #D5DBDB, ${Math.round((value % 1) * 100)}%, #E5E8E8 0%)` };
    return <Badge style={ style } label={ Math.floor(value).toString() } value={ 'LVL' } />;
  }
}
