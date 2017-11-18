import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render() {
    return (
      <div className="loading v-center">
        <div>Loading...</div>
      </div>
    );
  }
}
