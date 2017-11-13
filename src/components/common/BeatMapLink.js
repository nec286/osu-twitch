import Inferno from 'inferno';
import Component from 'inferno-component';

export default class extends Component {
  render({ beatMap }) {
    const url = `https://osu.ppy.sh/b/${beatMap.beatmap_id}?m=${beatMap.mode}`;
    return (
      <a href={ url } target="_blank" nofollow>
        { beatMap.title } [{ beatMap.version }]
      </a>
    );
  }
}
