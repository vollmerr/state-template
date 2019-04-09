import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldCheckboxesProps extends HTMLInputElement {
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

  /** aria-label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when checkbox is blurred */
  onBlur?: (string: value?) => void;

  /** Called when checkbox changes */
  onChange?: (string: value?) => void;

  /** Called when checkbox is focused */
  onFocus?: (string: value?) => void;

  /** Options to select from */
  options: Array<types.Option>;

  /** Value of the field */
  value?: string;

  /** Use style variant */
  variant?: 'highlight';
}

declare class FieldCheckboxes extends React.Component<FieldCheckboxesProps, {}> {}

export default FieldCheckboxes;
