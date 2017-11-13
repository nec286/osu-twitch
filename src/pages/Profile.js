import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import {
  GlobalPPRank,
  CountryPPRank,
  PlayCount,
  Accuracy,
  RankedScore,
  TotalScore,
  Badges
} from '../components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { user } = state;
    return (
      <div className="profile">
        <table className="table">
          <GlobalPPRank value={ user.pp_rank } />
          <CountryPPRank country={ user.country } value={ user.pp_country_rank } />
          <PlayCount value={ user.playcount } />
          <Accuracy value={ user.accuracy } />
          <TotalScore value={ user.total_score } />
          <RankedScore value={ user.ranked_score } />
        </table>
        <Badges user={ user } />
      </div>
    )
  }
}
