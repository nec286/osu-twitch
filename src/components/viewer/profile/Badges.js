import Inferno from 'inferno';
import Component from 'inferno-component';
import { Level } from './';
import { GradeBadge } from '../../common';

export default class extends Component {
  render({ user }) {
    return (
      <div className="d-flex justify-content-center">
        <GradeBadge grade='ss' label={ user.count_rank_ss } />
        <GradeBadge grade='s' label={ user.count_rank_s } />
        <GradeBadge grade='a' label={ user.count_rank_a } />
        <Level value={ user.level } />
      </div>
    );
  }
}
