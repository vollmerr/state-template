import * as React from 'react';

import * as types from '../../utils/types';

export interface FieldCheckboxesProps extends HTMLInputElement {
  /** Use style variant */
  variant?: ''
    | 'primary';

  /** Options to select from */
  options: Array<types.Option>;

  /** aria-label for checkbox group */
  label: String;

  /** Display inline */
  inline: T.bool,
}

declare class FieldCheckboxes extends React.Component<FieldCheckboxesProps, {}> {}

export default FieldCheckboxes;
