import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic } from './';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Hit Accuracy" value={ Number(value).toFixed(2) + '%' } />;
  }
}
