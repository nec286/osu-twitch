import Inferno from 'inferno';
import Component from 'inferno-component';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import classNames from 'classnames';

export default class extends Component {
  render({ lastRefreshTime, className }) {
    return (
      <small className={ classNames('refresh-time text-xs', className) }>
        { !!lastRefreshTime && distanceInWordsToNow(lastRefreshTime, { addSuffix: true }) }<i className="icon-refresh" />
      </small>
    );
  }
}
