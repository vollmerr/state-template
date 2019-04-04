import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldDateProps extends HTMLInputElement {
  /** Value of date selected */
  value?: String;

  /** Minimum date able to select */
  minDate?: string | Date;

  /** Disable the input */
  disabled?: boolean;

  /** Called when date changes */
  onChange?: Function;
}

declare class FieldDate extends React.Component<FieldDateProps, {}> {}

export default FieldDate;
