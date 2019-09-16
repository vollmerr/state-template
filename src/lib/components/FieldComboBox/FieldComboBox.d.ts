import * as React from 'react';
import * as types from '../../utils/types';

export interface FieldSelectProps extends Omit<HTMLSelectElement, 'options'> {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Ref to attach to input */
  inputRef?: React.RefObject<HTMLInputElement>;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the listbox is shown */
  onHide?: () => void;

  /** Called when the listbox is hidden */
  onShow?: () => void;

  /** Called after listbox item is selected */
  onSelect: (item?: types.Option) => void,

  /** Options to select from  */
  options: Array<types.Option>;
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> { }

export default FieldSelect;
