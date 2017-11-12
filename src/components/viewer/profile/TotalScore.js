import Inferno from 'inferno';
import Component from 'inferno-component';
import numeral from 'numeraljs';
import { Statistic } from '../../common';

export default class extends Component {
  render({ value }) {
    return <Statistic label="Total Score" value={ numeral(value).format() } />;
  }
}
