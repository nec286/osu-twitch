import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ beatMap }) {
    const title = `${beatMap.artist} - ${beatMap.title} [${beatMap.version}]`;
    return (
      <a className="d-block pb-1" href={ `https://osu.ppy.sh/b/${beatMap.beatmap_id}?m=${beatMap.mode}` } title={ title } target="_blank" nofollow>
        { title }
      </a>
    );
  }
}
