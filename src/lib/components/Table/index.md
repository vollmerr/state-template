```jsx
  <Table 
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    title={'Table'}
    headers={{ col1: 'column 1', col2: 'column 2' }}
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
    data={aLotOfData}
    title={'Table With Pagination'}
    headers={{ col1: 'column 1', col2: 'column 2' }}
  />
```

### row onClick handler

```jsx
  <Table 
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    title={'Table'}
    headers={{ col1: 'column 1', col2: 'column 2' }}
    onClickRow={row => alert(`you click on row ${row.id}`)}
  />
```

### custom column rendering

```jsx
  <Table 
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    title={'Table'}
    headers={{ col1: 'column 1', col2: 'column 2' }}
    renderCol={{ col2: (value, row, col) => `custom render: ${value}, ${row}, ${col}` }}
  />
```

