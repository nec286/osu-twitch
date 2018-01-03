import Inferno from 'inferno';
import Component from 'inferno-component';
import { Results, VCenter } from 'components/viewer';
import { parseEventHTML } from 'utils';

export default class extends Component {
  render({ events=[], beatMaps }) {
    const results = events.map(event => {
      return Object.assign(event, parseEventHTML(event.display_html));
    });
    if(!events.length) {
      return <VCenter>No recent events</VCenter>;
    }
    return <Results results={ results } beatMaps={ beatMaps } />;
  }
}
