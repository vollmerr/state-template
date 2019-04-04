import * as React from 'react';
import * as ReduxForm from 'redux-form';

import * as types from '../../utils/types';

export interface FieldInputProps extends HTMLInputElement {
  /** HTML tag to render as */
  tag?: string | React.ReactNode;
}

declare class FieldInput extends React.Component<FieldInputProps, {}> {}

export default FieldInput;
