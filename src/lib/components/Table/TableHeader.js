import React from 'react';
import T from 'prop-types';

const TableHeader = ({ title, onSearch }) => (
  <div className={'row table-header'}>
    <div className={'col-xs-12 col-sm-6'}>
      {title && <h2>{title}</h2>}
    </div>
    <div className={'col-xs-12 col-sm-6'}>
      <div className={'form-group has-feedback'}>
        <input className={'form-control'} placeholder={'Search'} onInput={e => onSearch(e.target.value)} />
        <span className={'ca-gov-icon-search-right form-control-feedback'} />
      </div>
    </div>
  </div>
);

TableHeader.propTypes = {
  /* Title of table to display */
  title: T.string,
  /* Search handler provided by ToolkitProvider */
  onSearch: T.func.isRequired,
};

TableHeader.defaultProps = {
  title: null,
};

export default TableHeader;
