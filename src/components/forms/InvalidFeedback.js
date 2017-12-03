import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ label, errors=[] }) {
    return (
      <ul className="list-unstyled invalid-feedback">
        { errors.map(err => {
          if(err === 'required') {
            return <li>Please provide a valid { label }.</li>;
          }
        }) }
      </ul>
    );
  }
}
