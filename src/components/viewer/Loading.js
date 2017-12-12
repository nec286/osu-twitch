import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render() {
    return (
      <div className="loading">
        <div className="v-center">
          <div className="osu-circle animate-beat m-auto">
            <small className="v-center text-xs">Loading</small>
          </div>
        </div>
      </div>
    );
  }
}
