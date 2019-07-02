import * as React from 'react';

export interface FieldInputProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Class names to attach to the field */
  className?: string;

  /** Disable the input */
  disabled?: boolean;

  /** Id of field */
  id?: string;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (string: value?) => void;

  /** Called when the field changes */
  onChange?: (string: value?) => void;

  /** Called when the field is focused */
  onFocus?: (string: value?) => void;

  /** HTML tag to render as */
  tag?: string | React.ReactNode;

  /** Placeholder to display when no value */
  placeholder?: string;

  /** Value of the field */
  value?: string;
}

declare class FieldInput extends React.Component<FieldInputProps, {}> {}

export default FieldInput;
