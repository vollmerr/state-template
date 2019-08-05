import React from 'react';
import T from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import classNames from 'classnames';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import TableHeader from './TableHeader';

class Table extends React.Component {
  buildColumns = columns => columns.map(x => ({
    ...x,
    headerStyle: {
      ...x.style,
      minWidth: x.minWidth ? `${x.minWidth}px` : '100px',
      maxWidth: x.maxWidth ? `${x.maxWidth}px` : 'auto',
    },
  }))

  buildPagination = (baseProps) => {
    const { data } = baseProps;
    let hideSizePerPage = false;
    let showTotal = true;
    // hide size per page if less than first amount selectable
    if (data.length < 10) {
      hideSizePerPage = true;
      showTotal = false;
    }

    return paginationFactory({
      showTotal,
      hideSizePerPage,
      hidePageListOnlyOnePage: true,
      paginationTotalRenderer: this.renderPaginationTotal,
    });
  }

  // rendered after size per page dropdown
  renderPaginationTotal = () => (
    <span className="react-bootstrap-table-pagination-total"> Per Page</span>
  )

  renderTable = ({ searchProps, baseProps }) => {
    const {
      cellEdit,
      className,
      defaultSorted,
      hideSearch,
      menu,
      rowClasses,
      rowEvents,
      selectRow,
      title,
    } = this.props;

    const { columns, ...rest } = baseProps;
    const pagination = this.buildPagination(baseProps);
    const mappedColumns = this.buildColumns(columns);
    const cn = classNames([
      className,
      'st-table',
      { 'with-events': rowEvents },
    ]);

    const tableProps = {
      ...rest,
      bootstrap4: true,
      bordered: false,
      columns: mappedColumns,
      condensed: true,
      defaultSorted,
      hover: true,
      noDataIndication: 'No Entries',
      pagination,
      rowClasses,
      rowEvents,
      ...(selectRow && { selectRow }),
      ...(cellEdit && { cellEdit }),
    };

    return (
      <div className={cn} data-test={'table'}>
        <TableHeader title={title} menu={menu} hideSearch={hideSearch} {...searchProps} />
        <BootstrapTable {...tableProps} />
      </div>
    );
  }

  render() {
    const {
      keyField = 'id',
      search = true,
      ...rest
    } = this.props;

    return (
      <ToolkitProvider keyField={keyField} search={search} {...rest}>
        {this.renderTable}
      </ToolkitProvider>
    );
  }
}

Table.propTypes = {
  /** Options for editing cells */
  cellEdit: T.object,

  /** Additional class name to attach to table */
  className: T.string,

  /** Column definintions */
  columns: T.arrayOf(
    T.shape({
      dataField: T.string.isRequired,
      text: T.string.isRequired,
      sort: T.bool,
      formatter: T.func,
    }),
  ).isRequired,

  /** Data to build rows from */
  data: T.arrayOf(
    T.shape({
      id: T.oneOfType([T.string, T.number]).isRequired,
    }),
  ).isRequired,

  /** Default columns as being sorted */
  defaultSorted: T.arrayOf(
    T.shape({
      dataField: T.string.isRequired,
      order: T.string.isRequired,
    }),
  ),

  /** Hides the search box */
  hideSearch: T.bool,

  /** Menu to render */
  menu: T.node,

  /** Builds additional class name for given row */
  rowClasses: T.func,

  /** Events to attach to rows */
  rowEvents: T.shape({
    onClick: T.func,
  }),

  /** Options for selecting rows */
  selectRow: T.object,

  /** Title to render */
  title: T.string,
};

Table.defaultProps = {
  cellEdit: null,
  className: null,
  defaultSorted: null,
  hideSearch: false,
  menu: null,
  rowClasses: null,
  rowEvents: null,
  selectRow: null,
  title: '',
};


export default Table;
