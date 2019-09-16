import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldSelectProps extends Omit<HTMLSelectElement, 'options'> {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref<HTMLSelectElement>;

  /** Label for the field */
  label: string;

  /** Called when the field is blurred */
  onBlur?: (event: FocusEvent, value?: string) => void;

  /** Called when the field changes */
  onChange?: (event: Event, value?: string) => void;

  /** Called when the field is focused */
  onFocus?: (event: FocusEvent, nodeType: string) => void;

  /** Options to select from  */
  options: Array<types.Option>;
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> {}

export default FieldSelect;
