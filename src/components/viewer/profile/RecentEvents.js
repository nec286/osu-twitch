import Inferno from 'inferno';
import Component from 'inferno-component';
import { ResultList } from 'components/viewer';
import { parseEventHTML } from 'utils';

export default class extends Component {
  render({ events=[], beatMaps }) {
    const results = events.map(event => {
      const extra = parseEventHTML(event.display_html);
      return Object.assign(event, extra);
    });

    return(
      <div className="recent-events">
        <h2>Recent</h2>
        <ResultList results={ results } beatMaps={ beatMaps } />
      </div>
    );
  }
}
