import * as React from 'react';

export interface TooltipProps {
  /** Content to render, mutually exlusive with 'text' */
  children?: React.ReactNode;

  /** Style class name to attach */
  className?: string;

  /** ID of tooltip */
  id: T.string.isRequired,

  /** Content to render, mutually exlusive with 'children' */
  text?: React.ReactNode;
}

declare class Tooltip extends React.Component<TooltipProps, {}> {}

export default Tooltip;
