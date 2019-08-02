import * as React from 'react';

export interface FieldFileProps extends HTMLInputElement {
  /** One or more unique file type specifiers describing file types to allow */
  accept?: string;

  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Text for upload button */
  btnText?: string | React.ReactNode;

  /** What source to use for capturing image or video data */
  capture?: string;

  /** Class names to attach to the field */
  className?: string;

  /** Disable the input */
  disabled?: boolean;

  /** Id of field */
  id?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref;

  /** Label for the field */
  label: string;

  /** Indicates that the user may choose more than one file */
  multiple?: boolean;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (string: value?) => void;

  /** Called when the field changes */
  onChange?: (string: value?) => void;

  /** Called when the field is focused */
  onFocus?: (string: value?) => void;

  /** Value of the field */
  value?: string;
}

declare class FieldFile extends React.Component<FieldFileProps, {}> { }

export default FieldFile;
