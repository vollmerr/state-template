import React from 'react';
import { Table as ReactableTable, Tr, Td } from 'reactable';

// TODO: MOVE TO ST

// TODO move to sepeate file..
const TableHeader = ({ title, onFilter, showFilter }) => (
  <div className={'row reactable-title'}>
    <div className={'col-xs-12 col-sm-6'}>
      <h2>{title}</h2>
    </div>
    {
      showFilter && (
        <div className={'col-xs-12 col-sm-6'}>
          <div className={'form-group has-feedback'}>
            <input className={'form-control'} placeholder={'Search'} onInput={onFilter} />
            <span className={'ca-gov-icon-search-right form-control-feedback'} />
          </div>
        </div>
      )
    }
  </div>
);

class Table extends React.Component {
  state = { filter: '' }

  filterRows = (event) => {
    this.setState({ filter: event.target.value });
  }

  getFilterable = () => {
    const { toFilter, headers } = this.props;
    if (toFilter) { return toFilter; }
    // default to using all headers
    return Object.values(headers);
  }

  buildTableProps = () => {
    const { title, data } = this.props;
    const { filter } = this.state;
    const itemsPerPage = data.length > 15 ? 15 : 0;
    const filterable = this.getFilterable();

    const tableProps = {
      itemsPerPage,
      className: 'table table-condensed table-hover st-table',
      previousPageLabel: '&#171;',
      nextPageLabel: '&#187;',
      noDataText: `No ${title}`,
      hideFilterInput: true,
      filterBy: filter,
      filterable,
      sortable: filterable,
      defaultSort: null,
    };

    return tableProps;
  };

  handleClickRow = row => () => {
    const { onClickRow } = this.props;
    if (onClickRow) {
      onClickRow(row);
    }
  }

  render() {
    const { title, data, headers } = this.props;
    const tableProps = this.buildTableProps();

    return (
      <div className={'row'}>
        <div className={'col-xs-12'}>
          <TableHeader title={title} onFilter={this.filterRows} showFilter={data.length} />
          <ReactableTable {...tableProps}>
            {
              data.map(row => (
                <Tr key={row.id} onClick={this.handleClickRow(row)}>
                  {
                    Object.keys(row).map((col) => {
                      const header = headers[col];
                      if (!header) {
                        return null;
                      }

                      return (
                        <Td column={headers[col]} key={`${row.id}-${col}`}>{row[col]}</Td>
                      );
                    })
                  }
                </Tr>
              ))
            }
          </ReactableTable>
        </div>
      </div>
    );
  }
}

export default Table;
