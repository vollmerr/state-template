```jsx
  <Table 
    title={'Table'}
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2', col3: 'row 1 col 3', col4: 'row 1 col 4', col5: 'row 1 col 5', col6: 'row 1 col 6', col7: 'row 1 col 7', col8: 'row 1 col 8', col9: 'row 1 col 9', col10: 'row 1 col 10' },      
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2', col3: 'row 2 col 3', col4: 'row 2 col 4', col5: 'row 2 col 5', col6: 'row 2 col 6', col7: 'row 2 col 7', col8: 'row 2 col 8', col9: 'row 2 col 9', col10: 'row 1 col 10' },  
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2', sort: true },      
      { dataField: 'col3', text: 'column 3', sort: true }, 
      { dataField: 'col4', text: 'column 4 with long title', sort: true },
      { dataField: 'col5', text: 'column 5', minWidth: 200, maxWidth: 250, sort: true }, 
      { dataField: 'col6', text: 'column 6', minWidth: 200, maxWidth: 250 },
      { dataField: 'col7', text: 'column 7' }, 
      { dataField: 'col8', text: 'column 8' },
      { dataField: 'col9', text: 'column 9', sort: true }, 
      { dataField: 'col10', text: 'column 10', sort: true },
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

### row event handlers and styling

```jsx
  const clickRow =  (e, row, rowIndex) => {
    alert(`clicked on row: ${JSON.stringify(row, null, 2)}`);
  };

  const rowClasses = (row, rowIndex) => {
    return rowIndex === 1 ? 'selected' : null;
  }

  <Table 
    title={'Table With Row Events'}
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
      { id: 'row3Id', col1: 'row 3 col 1', col2: 'row 3 col 2' },
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2' },
    ]}
    rowEvents={{ onClick: clickRow }}
    rowClasses={rowClasses}
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

### with menu

```jsx
  const menu = (
    <ButtonRow>
      <Button text={'new'} onClick={() => {}} variant={'primary'} />
      <Button text={'edit'} onClick={() => {}} variant={'default'} />
    </ButtonRow>
  );

  <Table 
    data={[
      { id: 'row1Id', col1: 'row 1 col 1', col2: 'row 1 col 2' },
      { id: 'row2Id', col1: 'row 2 col 1', col2: 'row 2 col 2' },
    ]}
    columns={[
      { dataField: 'col1', text: 'column 1', sort: true }, 
      { dataField: 'col2', text: 'column 2' },
    ]}
    menu={menu}
  />
```
