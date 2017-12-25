import Inferno from 'inferno';
import Component from 'inferno-component';
import { Banner, ModeSelect } from 'components/viewer';

export default class extends Component {
  render({ mode }) {
    return (
      <header className="w-100">
        <Banner { ...this.props } />
        <ModeSelect mode={ mode } />
      </header>
    );
  }
}
