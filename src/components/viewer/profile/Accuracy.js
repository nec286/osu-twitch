import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Hit Accuracy" value={ Math.round(value * 100) / 100 + '%' } />;
  }
}
