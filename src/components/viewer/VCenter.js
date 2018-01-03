import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ children }) {
    return (
      <div className="v-center position-relative w-100">
        <div className="text-center">{ children }</div>
      </div>
    );
  }
}
