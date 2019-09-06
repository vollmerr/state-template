import * as React from 'react';
import * as types from '../../utils/types';

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
  inputRef?: React.RefObject<HTMLInputElement>;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the field changes, provided by redux-form */
  onChange: (value?: string) => void;

  /** Called after listbox is hidden */
  onHide?: () => void;

  /** Called after listbox is shown */
  onShow?: () => void;

  /** Called after listbox item is selected */
  onSelect: (item?: types.Option) => void,

  /** Options to select from  */
  options: Array<types.Option>;

  /** Value of the field, provided by redux-form */
  value?: string;
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> { }

export default FieldSelect;
