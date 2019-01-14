import React from 'react';
import T from 'prop-types';

class TableHeader extends React.Component {
  // render title of table
  renderTitle = () => {
    const { title } = this.props;

    if (title) {
      return (
        <div className={'col-xs-12 col-sm-6'}>
          <h2>{title}</h2>
        </div>
      );
    }

    return null;
  }

  // render menu for actions against table
  renderMenu = () => {
    const { menu, title } = this.props;

    let className = 'col-xs-12 col-sm-6';
    // push menu above title if it exists
    if (title) {
      className = 'col-xs-12';
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

  // render search bar for filtering table
  renderSearch = () => {
    const { onSearch } = this.props;

    if (onSearch) {
      return (
        <div className={'col-xs-12 col-sm-6'}>
          <div className={'form-group has-feedback'}>
            <input className={'form-control'} placeholder={'Search'} onInput={e => onSearch(e.target.value)} />
            <span className={'ca-gov-icon-search-right form-control-feedback'} />
          </div>
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
  /* Title of table to display */
  title: T.string,
  /* Menu of actions to take against table */
  menu: T.node,
  /* Search handler provided by ToolkitProvider */
  onSearch: T.func,
};

TableHeader.defaultProps = {
  title: null,
  menu: null,
  onSearch: null,
};

export default TableHeader;
