import Inferno from 'inferno';
import Component from 'inferno-component';
import { formatNo } from 'utils';
import { Badge, Flag, Grade } from 'components/viewer';

export default class extends Component {
  render({ profile }) {
    return (
      profile &&
      <div className="d-flex flex-column">
        <Badge label={  <span className="icon-globe">{ profile.pp_rank > 0 ? formatNo(profile.pp_rank) : '-'}</span>  } />
        <Badge label={  <Flag country={ profile.country }>{ profile.pp_country_rank > 0 ? formatNo(profile.pp_country_rank) : '-'  }</Flag> } />
        { /*  ['ss', 's', 'a'].map(rank => <Grade label={ rank.toUpperCase() } value={ profile[`count_rank_${rank}`] } /> )  */ }
      </div>
    );
  }
}
