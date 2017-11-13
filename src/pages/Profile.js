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
  Level
} from '../components/viewer/profile';

import classNames from 'classnames';
class Grade extends Component {
  render({ grade, value }) {
    return (
      <div className="grade-badge">
        <div className={ classNames('badge grade', grade) }>{ grade.toUpperCase() }</div>
        { !!value && <div className="badge value">{ value }</div> }
      </div>
    );
  }
}

class GradesAndLevel extends Component {
  render({ user }) {
    return (
      <div className="d-flex justify-content-center">
        <Grade grade='ss' value={ user.count_rank_ss } />
        <Grade grade='s' value={ user.count_rank_s } />
        <Grade grade='a' value={ user.count_rank_a } />
        <Level value={ user.level } />
      </div>
    );
  }
}

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
        <GradesAndLevel user={ user } />
      </div>
    )
  }
}
