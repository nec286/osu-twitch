import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { Badge } from 'components/viewer';

export default class extends Component {
  render({ value }) {
    return (
      <Badge className="score-pp" label={ Math.round(value) + 'pp' } />
    );
  }
}
