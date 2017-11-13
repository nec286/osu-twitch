import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import { Link } from 'inferno-router';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

@connect(['state', 'store'])
class PageItem extends Component {
  @autobind
  handleChange(e) {
    const { store, context } = this.props;
    store[context].page = e.target.dataset.page;
  }

  render({ context, value, label, store }) {
    const classes = classNames("page-item", {
      active: store[context].page == value
    });

    return(
      <li className={ classes }>
        <Link className="page-link" onClick={ this.handleChange } data-page={ value }>
          { label || value }
        </Link>
      </li>
    );
  }
}

@connect(['store'])
export default class extends Component {
  render({ context, store }) {
    const { pageCount } = store[context];
    return ( pageCount > 1 &&
      <nav className="pagination justify-content-center">
        <PageItem { ...this.props } value={0} label="prev" />
        <PageItem { ...this.props } value={1} label="next" />
      </nav>
    );
  }
}
