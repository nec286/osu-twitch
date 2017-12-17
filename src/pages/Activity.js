import Inferno from 'inferno';
import Component from 'inferno-component';
import { Loading, RecentEvents } from 'components/viewer';

export default class extends Component {
  render({ settings, isFetchingProfile, profiles, beatMaps }) {
    const profile = profiles.get(settings.get('mode'));

    return (
      <div className="activity">
        { isFetchingProfile && <Loading /> }
        { !isFetchingProfile && !!profile &&
          <RecentEvents events={ profile.events } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
