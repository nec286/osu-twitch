import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ error }) {
    return (
      <div className="error v-center">
        <div>Unable to load extension</div>
      </div>
    );
  }
}
