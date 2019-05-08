import * as React from 'react';
import * as ReduxForm from 'redux-form';

export interface WrappedFieldProps {
  /** Style class name to attach to button */
  className?: string;

  /** Disable the input */
  disabled?: boolean;

  /** Help text to render under input */
  helpText?: string;

  /** Redux form props, such as onChange and value */
  input: ReduxForm.WrappedFieldProps;

  /** Label to display above input */
  label?: string;

  /** Meta information, such as errors and touched */
  meta: ReduxForm.WrappedFieldMetaProps;

  /** Name of field */
  name: string;

  /** The field should use the default required validation */
  required?: boolean;

  /** Tooltip to display */
  tooltip?: string | React.ReactNode;
}

declare class FieldWrapper extends React.Component<WrappedFieldProps, {}> {}

export default FieldWrapper;
