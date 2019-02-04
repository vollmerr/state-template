import * as React from 'react';
// import * as ReduxForm from 'redux-form';

// import * as types from '../../../utils/types';

export interface FieldCheckboxesProps {
  /** Use style variant */
  variant: ''
    | 'primary';

  // /** Input from redux-form's Field, attaches name, value, etc */
  // input: ReduxForm.WrappedFieldInputProps;

  // /** Options to select from */
  // options: Array<types.option>;

  /** Disable the input */
  disabled?: boolean;
}

declare class FieldCheckboxes extends React.Component<FieldCheckboxesProps, {}> {}

export default FieldCheckboxes;
