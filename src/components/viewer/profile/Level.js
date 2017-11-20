import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    const style = { background: `linear-gradient(0deg, #f48fb1, ${Math.round((value % 1) * 100)}%, #f8bbd0 0%)` };
    return <Badge style={ style } label={ Math.floor(value).toString() } value={ 'LVL' } />;
  }
}
