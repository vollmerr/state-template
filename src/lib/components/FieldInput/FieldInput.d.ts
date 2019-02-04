import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldInputProps {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: ReduxForm.WrappedFieldInputProps;

  /** HTML tag to render as */
  tag?: string | React.ReactNode;

  /** Input type to use */
  type?: string;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldInput extends React.Component<FieldInputProps, {}> {}

export default FieldInput;
