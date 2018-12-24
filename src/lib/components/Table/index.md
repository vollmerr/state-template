```jsx
  <Table 
    title={'Table'}
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2' },
    ]}
  />
```

### pagination

```jsx
  const aLotOfData = Array(300).fill(0).map((x, i) => ({
    id: i,
    col1: `row ${i} col 1`,
    col2: `row ${i} col 2`,
  }));

  <Table 
    title={'Table With Pagination'}    
    data={aLotOfData}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2' },
    ]}
  />
```

### row event handlers

```jsx
  const clickRow =  (e, row, rowIndex) => {
    alert('clicked on row: ', JSON.stringify(row, null, 2));
  };

  <Table 
    title={'Table With Row Events'}
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2' },
    ]}
    rowEvents={{ onClick: clickRow }}
  />
```

### custom column rendering

```jsx
  const rowFormat = (cell, row, rowIndex) => (
    <A onClick={() => console.log('clicked row button', cell, row, rowIndex)} text={`link ${rowIndex}`} />
  );

  <Table 
    title={'Table With Custom Rendering'}
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2', formatter: rowFormat },
    ]}
  />
```

