import Inferno from 'inferno';
import Component from 'inferno-component';
import numeral from 'numeraljs';
import { Statistic } from '../../common';

export default class extends Component {
  render({ label, value }) {
    return <Statistic label={ label } value={ numeral(value).format() } />;
  }
}
