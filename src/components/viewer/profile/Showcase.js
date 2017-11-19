import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { Badge, Flag } from 'components/viewer';

export default class extends Component {
  render({ user }) {
    const ranks = ['ss', 's', 'a'];
    return (
      <div className="showcase d-flex justify-content-center">
        <Badge label={  <i className="icon-globe" /> } value={ user.pp_rank } />
        <Badge label={  <Flag country={ user.country } /> } value={ user.pp_country_rank } />
        { ranks.map(rank => <Badge className={ rank } label={ rank.toUpperCase() } value={ user[`count_rank_${rank}`] } /> ) }
        <Level value={ user.level } />
      </div>
    );
  }
}
