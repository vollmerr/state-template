import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldSelectProps {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: ReduxForm.WrappedFieldInputProps;

  /** Options to select from */
  options: Array<types.Option>;

  /** Disable the input */
  disabled?: boolean;

  /** Allow multiple selecting */
  multiple?: boolean,
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> {}

export default FieldSelect;
