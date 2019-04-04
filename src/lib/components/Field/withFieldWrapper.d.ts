import * as React from 'react';
import * as ReduxForm from 'redux-form';

export interface WrappedFieldProps {
  /** Label to display above input */
  label?: string;

  /** Meta information, such as errors and touched */
  meta: ReduxForm.WrappedFieldMetaProps;

  /** Name of field */
  name: string;

  /** Help text to render under input */
  helpText?: string;

  /** Style class name to attach to button */
  className?: string;

  /** Content to render */
  children: React.ReactNode;

  /** The field should use the default required validation */
  required?: boolean;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldWrapper extends React.Component<WrappedFieldProps, {}> {}

export default FieldWrapper;
