import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from '../../util';
import { Statistic } from '../../common';

export default class extends Component {
  render({ label, value }) {
    return <Statistic label={ label } value={ formatNo(value) } />;
  }
}
