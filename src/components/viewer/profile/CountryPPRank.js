import Inferno from 'inferno';
import Component from 'inferno-component';
import { Statistic, FlagIcon } from '../../common';

export default class extends Component {
  render({ country, value }) {
    return <Statistic className="bt-0" label={<FlagIcon country={ country } />} value={ value } />;
  }
}
