import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { Badge, Flag, Grade } from 'components/viewer';

export default class extends Component {
  render({ profile }) {
    const ranks = ['ss', 's', 'a'];
    return (
      profile &&
      <div className="showcase d-flex">
        <Badge className="rank" label={  <i className="icon-globe" /> } value={ profile.pp_rank } />
        <Badge className="rank" label={  <Flag country={ profile.country } /> } value={ profile.pp_country_rank } />
        { ranks.map(rank => <Grade label={ rank.toUpperCase() } value={ profile[`count_rank_${rank}`] } /> ) }
        <Level value={ profile.level } />
      </div>
    );
  }
}
