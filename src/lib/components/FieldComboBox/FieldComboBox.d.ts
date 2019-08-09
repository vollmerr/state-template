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

  /** Ref to attach to input */
  inputRef?: React.Ref;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the field changes, provided by redux-form */
  onChange: (string: value?) => void;

  /** Called after listbox is hidden */
  onHide?: () => void;

  /** Called after listbox is shown */
  onShow?: () => void;

  /** Options to select from  */
  options: Array<types.Option>;

  /** Value of the field, provided by redux-form */
  value?: string;
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> {}

export default FieldSelect;
