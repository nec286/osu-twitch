import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Play Count" value={ value } />;
  }
}
