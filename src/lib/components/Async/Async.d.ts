import * as React from 'react';

import * as Button from '../Button/Button';

export interface AsyncProps {
  /** Content to render */
  children: React.ReactNode;

  /** Error to render */
  error?: string;

  /** Action to remove the error */
  onDismiss?: () => void;

  /** Props to pass to `Button` in error message */
  btnProps?: Button.ButtonProps;

  /** Render loading indicator if true */
  isLoading: number | boolean;

  /** Delay until showing the loading indicator */
  delay?: number;
}

declare class Async extends React.Component<AsyncProps, {}> {}

export default Async;
