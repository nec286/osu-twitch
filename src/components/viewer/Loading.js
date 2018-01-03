import Inferno from 'inferno';
import Component from 'inferno-component';
import { VCenter } from 'components/viewer';

export default class extends Component {
  render() {
    return <VCenter><div className="loading animate beat m-auto" /></VCenter>;
  }
}
