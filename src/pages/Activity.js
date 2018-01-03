import Inferno from 'inferno';
import Component from 'inferno-component';
import { Loading, Events } from 'components/viewer';

export default class extends Component {
  render({ settings, profiles, beatMaps }) {
    const profile = profiles.get(settings.get('mode'));
    return (
      <div className="activity">
        { !!profile &&  <Events events={ profile.events } beatMaps={ beatMaps } /> }
      </div>
    );
  }
}
