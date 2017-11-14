import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { Badge } from '../../common';

export default class extends Component {
  render({ user }) {
    const ranks = ['ss', 's', 'a'];
    return (
      <div className="d-flex justify-content-center">
        { ranks.map(rank => <Badge className={ rank } label={ rank } value={ user[`count_rank_${rank}`] } /> ) }
        <Level value={ user.level } />
      </div>
    );
  }
}
