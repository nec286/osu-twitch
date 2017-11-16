import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from '../../../utils';
import { Statistic } from './';

export default class extends Component {
  render({ label, value }) {
    return <Statistic label={ label } value={ formatNo(value) } />;
  }
}
