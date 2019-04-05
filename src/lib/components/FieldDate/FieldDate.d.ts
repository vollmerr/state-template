import * as React from 'react';

export interface FieldDateProps extends HTMLInputElement {
  /** Minimum date able to select */
  minDate?: string | Date;
}

declare class FieldDate extends React.Component<FieldDateProps, {}> {}

export default FieldDate;
