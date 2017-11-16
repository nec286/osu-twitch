import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router } from 'inferno-router';
import { connect } from 'inferno-mobx';
import { FlagIcon } from 'components/common';
import { Accuracy, Score, Showcase } from 'components/viewer/profile';

function parseEventHTML(str) {
  const arr = str.split(/\s*(<[^>]*>)/g);
  const txt = arr.filter(v => !! v && !v.match(/\<*.+\>/));
  const img = arr.filter(v => v.match(/\<img.+\>/));
  return {
    global_rank: txt[2].split('rank #').pop(),
    rank: !!img[0] && img[0].split('/')[2].split('_')[0]
  }
}

import { ResultList } from 'components/viewer/results';
class RecentEvents extends Component {
  render({ events, beatMaps }) {
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

@connect(['state', 'store'])
export default class extends Component {
  render({ state }) {
    const { lastError, user, beatMaps } = state;

    return (
      <div className="profile">
        <table className="table table-sm">
          <tr>
            <td>Play Count</td>
            <td className="text-right">{ user.playcount }</td>
          </tr>
          <tr>
            <td>Hit Accuracy</td>
            <td className="text-right"><Accuracy value={ user.accuracy } /></td>
          </tr>
          <tr>
            <td>Total Score</td>
            <td className="text-right"><Score value={ user.total_score } /></td>
          </tr>
          <tr>
            <td>Ranked Score</td>
            <td className="text-right"><Score value={ user.ranked_score } /></td>
          </tr>
        </table>
        <Showcase user={ user } />
        <RecentEvents events={ user.events } beatMaps={ beatMaps } />
      </div>
    )
  }
}
