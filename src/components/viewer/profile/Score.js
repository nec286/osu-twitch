import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from '../../../utils';
import { Statistic } from './';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Total Score" value={ formatNo(value) } />;
  }
}
