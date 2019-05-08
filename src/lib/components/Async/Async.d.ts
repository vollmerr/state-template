import * as React from 'react';

import * as Button from '../Button/Button';

export interface AsyncProps {
  /** Props to pass to `Button` in error message */
  btnProps?: Button.ButtonProps;

  /** Content to render */
  children?: React.ReactNode;

  /** Delay until showing the loading indicator */
  delay?: number;

  /** Error to render */
  error?: string;

  /** Render loading indicator if true */
  isLoading?: number | boolean;

  /** Action to remove the error */
  onDismiss?: () => void;
}

declare class Async extends React.Component<AsyncProps, {}> {}

export default Async;
