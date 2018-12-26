import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import TableHeader from './TableHeader';

const pagination = paginationFactory({ hidePageListOnlyOnePage: true });

class Table extends React.Component {
  renderTable = ({ searchProps, baseProps }) => {
    const { title, rowEvents, defaultSorted } = this.props;

    return (
      <>
        <TableHeader title={title} {...searchProps} />
        <BootstrapTable
          hover
          condensed
          bordered={false}
          pagination={pagination}
          rowEvents={rowEvents}
          noDataIndication={'No Entries'}
          defaultSorted={defaultSorted}
          {...baseProps}
        />
      </>
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
