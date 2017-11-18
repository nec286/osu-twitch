import Inferno from 'inferno';
import Component from 'inferno-component';
import { OsuProfileLink } from 'components/viewer';

export default class extends Component {
  render({ user }) {
    return(
      <h1>
        <OsuProfileLink username={ !!user && user.username } />
      </h1>
    );
  }
}
