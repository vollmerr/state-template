import * as React from 'react';

export interface FieldInputProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref<HTMLInputElement>;

  /** Label for the field */
  label: string;

  /** Called when the field is blurred */
  onBlur?: (event: FocusEvent, value?: string) => void;

  /** Called when the field changes */
  onChange?: (event: Event, value?: string) => void;

  /** Called when the field is focused */
  onFocus?: (event: FocusEvent, nodeType: string) => void;

  /** HTML tag to render as */
  tag?: string | React.ReactNode;

  /** Tooltip to render */
  tooltip: React.ReactNode;
}

declare class FieldInput extends React.Component<FieldInputProps, {}> {}

export default FieldInput;
