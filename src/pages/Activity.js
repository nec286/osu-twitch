import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Loading } from 'components/viewer';
import { RecentEvents } from 'components/viewer/profile';

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { modeFilter, isFetchingProfile, profiles, beatMaps } = state;
    const profile = profiles.get(modeFilter);

    return (
      <div className="activity">
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile &&
          <RecentEvents events={ profile.events } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
