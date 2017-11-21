import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { Badge, Flag, Grade } from 'components/viewer';

export default class extends Component {
  render({ user }) {
    const ranks = ['ss', 's', 'a'].reverse();
    return (
      <div className="showcase d-flex flex-row-reverse">
        <Badge className="rank" label={  <i className="icon-globe" /> } value={ user.pp_rank } />
        <Badge className="rank" label={  <Flag country={ user.country } /> } value={ user.pp_country_rank } />
        <Level value={ user.level } />
        { ranks.map(rank => <Grade label={ rank.toUpperCase() } value={ user[`count_rank_${rank}`] } /> ) }
      </div>
    );
  }
}
