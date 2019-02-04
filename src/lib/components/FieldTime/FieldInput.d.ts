import * as React from 'react';
import * as ReduxForm from 'redux-form';

export interface FieldTimeProps {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: ReduxForm.WrappedFieldInputProps;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldTime extends React.Component<FieldTimeProps, {}> {}

export default FieldTime;
