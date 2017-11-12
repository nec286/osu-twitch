import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ value }) {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: `${value}%`}}>
          { value }%
        </div>
      </div>
    );
  }
}
