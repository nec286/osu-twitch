import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ beatMap }) {
    const url = `https://osu.ppy.sh/b/${beatMap.beatmap_id}?m=${beatMap.mode}`;
    const title = `${beatMap.artist} - ${beatMap.title} [${beatMap.version}]`;
    return (
      <a className="beatmap-link text-overflow-ellipses" href={ url } title={ title } target="_blank" nofollow>
        { title }
      </a>
    );
  }
}
