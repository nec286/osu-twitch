import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Accuracy, Score, Loading } from 'components/viewer';
import { TableRow, Showcase, RecentEvents } from 'components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { isFetchingUser, user, beatMaps } = state;

    if(isFetchingUser) return <Loading />;

    return (
      <div className="profile">
        <Showcase user={ user } />
        <table className="table">
          <TableRow label="Play Count" value={ user.playcount } />
          <TableRow label="Hit Accuracy" value={ <Accuracy value={ user.accuracy } /> } />
          <TableRow label="Ranked Score" value={ <Score value={ user.ranked_score } /> } />
        </table>
        <RecentEvents events={ user.events } beatMaps={ beatMaps } />
      </div>
    );
  }
}
