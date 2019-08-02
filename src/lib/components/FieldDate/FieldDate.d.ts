import * as React from 'react';

export interface FieldDateProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Class names to attach to the field wrapper */
  className?: string;

  /** Disable the input */
  disabled?: boolean;

  /** Id of field */
  id?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref;

  /** Label for the field */
  label: string;

  /** Minimum date able to select */
  minDate?: string | Date;

  /** Name of field */
  name: string;

  /** Called when the date changes */
  onChange?: (string: value?) => void;

  /** Value of the field */
  value?: string;
}

declare class FieldDate extends React.Component<FieldDateProps, {}> {}

export default FieldDate;
