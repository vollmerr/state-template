import * as React from 'react';

export interface FieldFileProps extends HTMLInputElement {
  /** Accessible indicator of related information */
  'aria-describedby'?: string;

  /** Accessible indicator for errors existing */
  'aria-invalid'?: string;

  /** Text for upload button */
  btnText?: string | React.ReactNode;

  /** What source to use for capturing image or video data */
  capture?: string;

  /** Ref to attach to input */
  inputRef?: React.Ref<HTMLInputElement>;

  /** Label for the field */
  label: string;

  /** Name of field */
  name: string;

  /** Called when the field is blurred */
  onBlur?: (event: FocusEvent, value?: string) => void;

  /** Called when the field changes */
  onChange?: (event: Event, value?: string) => void;

  /** Called when the field is focused */
  onFocus?: (event: FocusEvent, nodeType: string) => void;
}

declare class FieldFile extends React.Component<FieldFileProps, {}> { }

export default FieldFile;
