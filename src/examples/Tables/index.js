import React from 'react';

import { Table, A } from '../../lib';

import Page from '../Page';

export class Tables extends React.Component {
  buildData = () => Array(300).fill(0).map((x, i) => ({
    id: i,
    col1: `row ${i} col 1`,
    col2: `row ${i} col 2`,
    col3: 'really really really really really really really really really long cell',
  }))

  buildColumns = () => [
    { dataField: 'id', text: 'ID', sort: true },
    { dataField: 'col1', text: 'Column 1', sort: true },
    { dataField: 'col2', text: 'Column 2' },
    { dataField: 'col3', text: 'Really Long Data' },
    { dataField: 'btn', text: '', formatter: this.renderButton },
  ]

  clickRow = (e, row, rowIndex) => {
    console.log('clicked row..', e, row, rowIndex);
  }

  renderButton = (cell, row, rowIndex) => (
    <A onClick={() => console.log('clicked row button', cell, row, rowIndex)} text={`link ${rowIndex}`} />
  )

  render() {
    return (
      <Page title={'Tables'}>
        <Table
          title={'Example Table'}
          keyField={'id'}
          data={this.buildData()}
          columns={this.buildColumns()}
          rowEvents={{ onClick: this.clickRow }}
        />
      </Page>
    );
  }
}

export default Tables;
