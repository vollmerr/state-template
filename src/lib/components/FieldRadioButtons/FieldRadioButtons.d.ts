import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldRadioButtonsProps extends HTMLInputElement {
  /** Use style variant */
  variant?: ''
    | 'primary';

  /** Options to select from */
  options: Array<types.Option>;

  /** aria-label for radio button group */
  label: T.string.isRequired;
}

declare class FieldRadioButtons extends React.Component<FieldRadioButtonsProps, {}> {}

export default FieldRadioButtons;
