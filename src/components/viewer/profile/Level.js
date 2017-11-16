import Inferno from 'inferno';
import Component from 'inferno-component';
import { Badge } from '../../common';

export default class extends Component {
  render({ value }) {
    // const nextLevel = Math.round((value % 1) * 100);
    const nextLevel = 70;
    const style = {
      background: `linear-gradient(0deg, #bcaaa4, ${nextLevel}%, #d7ccc8 0%)`
    }
    return <Badge style={ style } label={ Math.floor(value).toString() } value={ 'LVL' } />;
  }
}
