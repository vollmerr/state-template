import * as React from 'react';

import * as types from '../../utils/types';

export type Row = {
  id: string | number;
}

export type Column = {
  dataField: string;
  formatter?: (cell: object, row: object, rowIndex: number) => React.ReactNode;
  sort?: boolean;
  text: string;
}

export type DefaultSort = {
  dataField: string;
  order: string;
}

export interface TableProps {
  /** Options for editing cells */
  cellEdit?: object;

  /** Additional class name to attach to table */
  className?: string;

  /** Column definintions */
  columns: Array<Column>;

  /** Data to build rows from */
  data: Array<Row>;

  /** Default columns as being sorted */
  defaultSorted?: Array<DefaultSort>;

  /** Hides the pagination / puts all rows on single page */
  hidePagination?: boolean;

  /** Hides the search box */
  hideSearch?: boolean;

  /* Key that will be used as the unique identifier in columns */
  keyField?: string;

  /** Menu to render */
  menu?: React.ReactNode;

  /** Builds additional class name for given row */
  rowClasses?: (row: object, rowIndex: number) => string | null;

  /** Events to attach to rows */
  rowEvents?: object;

  /* Display the search box */
  search: boolean;

  /** Options for selecting rows */
  selectRow?: object;

  /** Ref to attach to table */
  tableRef?: React.Ref;

  /** Title to render */
  title?: string;
}

declare class Table extends React.Component<TableProps, {}> { }

export default Table;
