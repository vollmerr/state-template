import React from 'react';
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
      { 'with-events': rowEvents },
    ]);

    return (
      <div className={cn} data-test={'table'}>
        <TableHeader title={title} menu={menu} {...searchProps} />
        <BootstrapTable
          hover
          condensed
          bordered={false}
          pagination={pagination}
          rowEvents={rowEvents}
          noDataIndication={'No Entries'}
          defaultSorted={defaultSorted}
          columns={mappedColumns}
          rowClasses={rowClasses}
          {...rest}
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

export default Table;
