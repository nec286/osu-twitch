import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ error }) {
    return (
      <div className="error position-relative h-100">
        <div className="v-center text-center">{ error }</div>
      </div>
    );
  }
}
