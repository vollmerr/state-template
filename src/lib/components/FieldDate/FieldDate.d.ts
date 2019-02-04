import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldDateProps {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: ReduxForm.WrappedFieldInputProps;

  /** Minimum date able to select */
  minDate?: string | Date;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldDate extends React.Component<FieldDateProps, {}> {}

export default FieldDate;
