import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { FlagIcon } from 'components/common';
import { Statistic, Accuracy, Score, Badges } from 'components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { user } = state;
    return (
      <div className="profile">
        <table className="table">
          <Statistic label={ <i className="icon-globe" /> } value={ user.pp_rank } />
          <Statistic label={ <FlagIcon country={ user.country } /> } value={ user.pp_country_rank } />
          <Statistic label="Play Count" value={ user.playcount } />
          <Accuracy value={ user.accuracy } />
          <Score label="Total Score" value={ user.total_score } />
          <Score label="Channel Feed" value={ user.ranked_score } />
        </table>
        <Badges user={ user } />
      </div>
    )
  }
}
