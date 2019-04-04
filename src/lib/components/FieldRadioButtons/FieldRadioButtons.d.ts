import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldRadioButtonsProps extends HTMLInputElement {
  /** Use style variant */
  variant?: ''
    | 'primary';

  /** Options to select from */
  options: Array<types.Option>;

  /** Label to display to radio button group */
  label: String;
}

declare class FieldRadioButtons extends React.Component<FieldRadioButtonsProps, {}> {}

export default FieldRadioButtons;
