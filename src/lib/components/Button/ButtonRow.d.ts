import * as React from 'react';

export interface ButtonRowProps {
  /** Style class name to attach to button */
  className?: string;

  /** Content to render */
  children?: React.ReactNode;
}

declare class ButtonRow extends React.Component<ButtonRowProps, {}> {}

export default ButtonRow;
