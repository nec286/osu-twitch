import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ error }) {
    return (
      <div className="error">
        <div className="v-center">{ error }</div>
      </div>
    );
  }
}
