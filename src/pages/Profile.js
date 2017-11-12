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
  LetterRank,
  Level,
  LevelProgress
} from '../components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { user } = state;
    return (
      <div className="profile">
        <table className="table table-sm">
          <GlobalPPRank value={ user.pp_rank } />
          <CountryPPRank country={ user.country } value={ user.pp_country_rank } />
          <PlayCount value={ user.playcount } />
          <Accuracy value={ user.accuracy } />
          <RankedScore value={ user.ranked_score } />
          <TotalScore value={ user.total_score } />
          <LetterRank label="ss" value={ user.count_rank_ss } />
          <LetterRank label="s" value={ user.count_rank_s } />
          <LetterRank label="a" value={ user.count_rank_a } />
          <Level value={ user.level } />
          <LevelProgress level={ user.level } />
        </table>
      </div>
    )
  }
}
