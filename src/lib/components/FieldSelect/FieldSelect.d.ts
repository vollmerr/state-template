import * as React from 'react';

export interface FieldSelectProps extends HTMLSelectElement {
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

  /** aria-label for the field */
  label: string;

  /** Allow multiple selecting */
  multiple?: boolean;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (string: value?) => void;

  /** Called when the field changes */
  onChange?: (string: value?) => void;

  /** Called when the field is focused */
  onFocus?: (string: value?) => void;

  /** Options to select from  */
  options: Array<types.Option>;

  /** Value of the field */
  value?: string;
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> {}

export default FieldSelect;
