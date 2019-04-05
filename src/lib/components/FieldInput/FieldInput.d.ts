import * as React from 'react';

export interface FieldInputProps extends HTMLInputElement {
  /** HTML tag to render as */
  tag?: string | React.ReactNode;
}

declare class FieldInput extends React.Component<FieldInputProps, {}> {}

export default FieldInput;
