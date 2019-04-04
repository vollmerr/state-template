import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldSelectProps extends HTMLInputElement {
  /** Value of option */
  value: any;

  /** Options to select from */
  options: Array<types.Option>;

  /** Allow multiple selecting */
  multiple?: boolean,
}

declare class FieldSelect extends React.Component<FieldSelectProps, {}> {}

export default FieldSelect;
