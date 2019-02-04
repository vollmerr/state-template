import * as React from 'react';

import * as Button from '../Button/Button';

export interface PanelProps {
  /** Title to render in panel heading */
  title: string;

  /** Props to pass to Button in panel  heading */
  buttonProps?: Button.ButtonProps;

  /** Content to render in panel body */
  children: React.ReactNode;

  /** Style to apply */
  variant: 'default'
    | 'primary'
    | 'overstated'
    | 'understated'
    | 'standout';

  /** Icon to render to left of title in panel heading */
  icon?: string;

  /** Class names to attach to the top level div */
  className?: string;
}

declare class Panel extends React.Component<PanelProps, {}> {}

export default Panel;
