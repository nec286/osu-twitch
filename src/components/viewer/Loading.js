import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render() {
    return (
      <div className="loading position-relative h-100">
        <div className="v-center text-center">
          <div className="indicator animate beat m-auto" />
        </div>
      </div>
    );
  }
}
