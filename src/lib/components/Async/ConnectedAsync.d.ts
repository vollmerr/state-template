import * as React from 'react';

import * as Button from '../Button/Button';

export interface ConnectedAsyncProps {
  /** Content to render */
  children: React.ReactNode;

  /** Props to pass to `Button` in error message */
  btnProps?: Button.ButtonProps;

  /** Delay until showing the loading indicator */
  delay?: number;
}

declare class ConnectedAsync extends React.Component<ConnectedAsyncProps, {}> {}

export default ConnectedAsync;
