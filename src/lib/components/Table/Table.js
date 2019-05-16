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
      title,
      menu,
      rowEvents,
      defaultSorted,
      rowClasses,
      className,
    } = this.props;
    const { columns, ...rest } = baseProps;
    const pagination = this.buildPagination(baseProps);
    const mappedColumns = this.buildColumns(columns);
    const cn = classNames([
      className,
      'st-table',
      { 'with-events': rowEvents },
    ]);

    return (
      <div className={cn} data-test={'table'}>
        <TableHeader title={title} menu={menu} {...searchProps} />
        <BootstrapTable
          {...rest}
          hover
          condensed
          bootstrap4
          bordered={false}
          pagination={pagination}
          rowEvents={rowEvents}
          noDataIndication={'No Entries'}
          defaultSorted={defaultSorted}
          columns={mappedColumns}
          rowClasses={rowClasses}
        />
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
  /** Title to render */
  title: T.string,

  /** Data to build rows from */
  data: T.arrayOf(
    T.shape({
      id: T.oneOfType([T.string, T.number]).isRequired,
    }),
  ).isRequired,

  /** Column definintions */
  columns: T.arrayOf(
    T.shape({
      dataField: T.string.isRequired,
      text: T.string.isRequired,
      sort: T.bool,
      formatter: T.func,
    }),
  ).isRequired,

  /** Events to attach to rows */
  rowEvents: T.shape({
    onClick: T.func,
  }),

  /** Builds additional class name for given row */
  rowClasses: T.func,

  /** Menu to render */
  menu: T.node,

  /** Default columns as being sorted */
  defaultSorted: T.arrayOf(
    T.shape({
      dataField: T.string.isRequired,
      order: T.string.isRequired,
    }),
  ),

  /** Additional class name to attach to table */
  className: T.string,
};

Table.defaultProps = {
  title: '',
  rowEvents: null,
  rowClasses: null,
  menu: null,
  defaultSorted: null,
  className: null,
};


export default Table;
