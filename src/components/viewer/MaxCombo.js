import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value, record }) {
    const percentage = value / record * 100;
    const style = { background: `linear-gradient(0deg, #ff4081, ${percentage}%, #ff80ab 0%)` };
    return <Badge className="max-combo" style={ style } label={ `${value }x` } />;
  }
}
