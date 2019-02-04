import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldRadioButtonsProps {
  /** Use style variant */
  variant?: ''
    | 'primary';

  /** Input from redux-form's Field, attaches name, value, etc */
  input: ReduxForm.WrappedFieldInputProps;

  /** Options to select from */
  options: Array<types.Option>;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldRadioButtons extends React.Component<FieldRadioButtonsProps, {}> {}

export default FieldRadioButtons;
