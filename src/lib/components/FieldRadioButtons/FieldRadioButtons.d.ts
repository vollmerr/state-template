import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldRadioButtonsProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Class names to attach to the field */
  className?: T.string;

  /** Disable the input */
  disabled?: boolean;

  /** Id of field */
  id?: string;

  /** Display inline */
  inline?: boolean;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when radio button is blurred */
  onBlur?: (string: value?) => void;

  /** Called when radio button changes */
  onChange?: (string: value?) => void;

  /** Called when radio button is focused */
  onFocus?: (string: value?) => void;

  /** Options to select from */
  options: Array<types.Option>;

  /** Value of the field */
  value?: string;

  /** Use style variant */
  variant?: 'highlight';
}

declare class FieldRadioButtons extends React.Component<FieldRadioButtonsProps, {}> {}

export default FieldRadioButtons;
