import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from '../../util';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Total Score" value={ formatNo(value) } />;
  }
}
