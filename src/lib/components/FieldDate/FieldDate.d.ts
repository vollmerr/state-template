import * as React from 'react';

export interface FieldDateProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref<HTMLInputElement>;

  /** Label for the field */
  label: string;

  /** Minimum date able to select */
  minDate?: string | Date;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (event: FocusEvent) => void;

  /** Called when the field changes */
  onChange?: (value?: string) => void;

  /** Called when the field is focused */
  onFocus?: (event: FocusEvent, nodeType: string) => void;

  /** Tooltip to render */
  tooltip: React.ReactNode;
}

declare class FieldDate extends React.Component<FieldDateProps, {}> {}

export default FieldDate;
