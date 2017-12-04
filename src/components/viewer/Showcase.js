import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from 'utils';
import { Badge, Flag, Grade } from 'components/viewer';

export default class extends Component {
  render({ profile }) {
    const ranks = ['ss', 's', 'a'];
    return (
      profile &&
      <div className="showcase d-flex">
        <Badge label={  <i className="icon-globe" /> } value={ profile.pp_rank > 0 ? formatNo(profile.pp_rank) : '-' } />
        <Badge label={  <Flag country={ profile.country } /> } value={ profile.pp_country_rank > 0 ? formatNo(profile.pp_country_rank) : '-'  } />
        { ranks.map(rank => <Grade label={ rank.toUpperCase() } value={ profile[`count_rank_${rank}`] } /> ) }
      </div>
    );
  }
}
