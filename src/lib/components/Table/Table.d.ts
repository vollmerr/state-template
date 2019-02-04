import * as React from 'react';

import * as types from '../../utils/types';

export type Row = {
  id: string;
}

export type Column = {
  dataField: string;
  text: string;
  sort?: boolean;
  formatter?:  (cell: object, row: object, rowIndex: number) => React.ReactNode;
}

export type DefaultSort = {
  dataField: string;
  order: string;
}

export interface TableProps {
  /** Title to render */
  title?: string;

  /** Data to build rows from */
  data: Array<Row>;

  /** Column definintions */
  columns: Array<Column>;

  /** Events to attach to rows */
  rowEvents?: object;

  /** Builds additional class name for given row */
  rowClasses?: (row: object, rowIndex: number) => string | null;

  /** Menu to render */
  menu?: React.ReactNode;

  /** Default columns as being sorted */
  defaultSorted?: Array<DefaultSort>;

  /** Additional class name to attach to table */
  className?: string;
}

declare class Table extends React.Component<TableProps, {}> {}

export default Table;
