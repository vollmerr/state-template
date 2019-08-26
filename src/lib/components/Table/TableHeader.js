import React from 'react';
import T from 'prop-types';

class TableHeader extends React.Component {
  // render menu for actions against table
  renderMenu = () => {
    const { menu, title, hideSearch } = this.props;

    let className = 'col-12 col-sm-6';

    if (title) {
      if (hideSearch) {
        // put menu to right of title if no search
        className = 'col-6 order-12 d-flex flex-row-reverse';
      } else {
        // push menu above title if it exists
        className = 'col-12';
      }
    }

    if (menu) {
      return (
        <div className={className}>
          {menu}
        </div>
      );
    }

    return null;
  }

  // render title of table
  renderTitle = () => {
    const { title, hideSearch } = this.props;

    let className = 'col-12 col-sm-6';

    if (hideSearch) {
      // allow menu to float to right if no search
      className = 'col-6';
    }

    if (title) {
      return (
        <div className={className}>
          <h2>{title}</h2>
        </div>
      );
    }

    return null;
  }

  // render search bar for filtering table
  renderSearch = () => {
    const {
      menu, title, onSearch, hideSearch,
    } = this.props;

    // push menu above title if it exists
    let className = 'col-12 col-sm-6';
    if (!title && !menu) {
      className = 'col-12 col-sm-6 offset-sm-6';
    }

    if (onSearch && !hideSearch) {
      return (
        <div className={className}>
          <input
            className={'form-control'}
            placeholder={'Search'}
            aria-label={`Search ${title || ''}`}
            onInput={(e) => onSearch(e.target.value)}
          />
          <span className={'ca-gov-icon-search-right'} />
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className={'row table-header'}>
        {this.renderMenu()}
        {this.renderTitle()}
        {this.renderSearch()}
      </div>
    );
  }
}

TableHeader.propTypes = {
  /** Hides the search box */
  hideSearch: T.bool,

  /* Menu of actions to take against table */
  menu: T.node,

  /* Search handler provided by ToolkitProvider */
  onSearch: T.func,

  /* Title of table to render */
  title: T.string,
};

TableHeader.defaultProps = {
  hideSearch: false,
  menu: null,
  onSearch: null,
  title: null,
};

export default TableHeader;
