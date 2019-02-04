import * as React from 'react';

export interface OverlayProps {
  /** Display the overlay */
  show: boolean;

  /** Click handler for overlay */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Key Press handler for overlay */
  onKeyPress?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If should only render in mobile viewport */
  isMobile?: boolean;

  /** Class name to attach */
  className?: string;
}

declare class Overlay extends React.Component<OverlayProps, {}> {}

export default Overlay;
