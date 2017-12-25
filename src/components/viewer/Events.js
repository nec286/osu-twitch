import Inferno from 'inferno';
import Component from 'inferno-component';
import { ResultList } from 'components/viewer';
import { parseEventHTML } from 'utils';

export default class extends Component {
  render({ events=[], beatMaps }) {
    const results = events.map(event => {
      return Object.assign(event, parseEventHTML(event.display_html));
    });
    return <ResultList results={ results } beatMaps={ beatMaps } />;
  }
}
