import Inferno from 'inferno';
import Component from 'inferno-component';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default class extends Component {
  render({ lastRefreshTime }) {
    return (
      <small className="refresh-time ml-auto">
        { !!lastRefreshTime && distanceInWordsToNow(lastRefreshTime, { addSuffix: true }) }<i className="icon-refresh" />
      </small>
    );
  }
}
