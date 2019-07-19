import * as React from 'react';

import * as types from '../../utils/types';

export type Row = {
  id: string | number;
}

export type Column = {
  dataField: string;
  formatter?:  (cell: object, row: object, rowIndex: number) => React.ReactNode;
  sort?: boolean;
  text: string;
}

export type DefaultSort = {
  dataField: string;
  order: string;
}

export interface TableProps {
  /** Additional class name to attach to table */
  className?: string;

  /** Column definintions */
  columns: Array<Column>;

  /** Data to build rows from */
  data: Array<Row>;

  /** Default columns as being sorted */
  defaultSorted?: Array<DefaultSort>;

  /** Menu to render */
  menu?: React.ReactNode;

  /** Builds additional class name for given row */
  rowClasses?: (row: object, rowIndex: number) => string | null;

  /** Events to attach to rows */
  rowEvents?: object;

  /** Options for selecting rows */
  selectRow?: object;

  /** Title to render */
  title?: string;
}

declare class Table extends React.Component<TableProps, {}> {}

export default Table;
