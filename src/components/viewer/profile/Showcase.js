import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { Badge, Flag, Grade } from 'components/viewer';

class Rank extends Component {
  render({ label, value }) {
    return (
      <Badge className="rank" label={ label } value={ value > 0 ? value : '-' } />
    );
  }
}

export default class extends Component {
  render({ profile }) {
    const ranks = ['ss', 's', 'a'];
    return (
      profile &&
      <div className="showcase d-flex">
        <Rank label={  <i className="icon-globe" /> } value={ profile.pp_rank } />
        <Rank label={  <Flag country={ profile.country } /> } value={ profile.pp_country_rank } />
        { ranks.map(rank => <Grade label={ rank.toUpperCase() } value={ profile[`count_rank_${rank}`] } /> ) }
        <Level value={ profile.level } />
      </div>
    );
  }
}
