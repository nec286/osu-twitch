import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ beatMap }) {
    return (
      <a className="d-block pb-1" href={ `https://osu.ppy.sh/b/${beatMap.beatmap_id}?m=${beatMap.mode}` } target="_blank" nofollow>
        { `${beatMap.artist} - ${beatMap.title} [${beatMap.version}]` }
      </a>
    );
  }
}
