import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldCheckboxesProps {
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

  /** Display inline */
  inline?: boolean;

  /** aria-label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (event: any, value?: string[]) => void;

  /** Called when the field changes */
  onChange?: (value?: string[]) => void;

  /** Called when the field is focused */
  onFocus?: (event: any, nodeType: string) => void;

  /** Options to select from */
  options: Array<types.Option>;

  /** Determines if field is required */
  required?: boolean;

  /** Tooltip to render */
  tooltip?: React.ReactNode;

  /** Value of the field */
  value?: string;

  /** Use style variant */
  variant?: 'highlight';
}

declare class FieldCheckboxes extends React.Component<FieldCheckboxesProps, {}> {}

export default FieldCheckboxes;
