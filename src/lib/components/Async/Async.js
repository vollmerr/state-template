import React from 'react';
import T from 'prop-types';

import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingIndicator';

/**
 * Async sections have a loading indicator if they take too long
 * to load, and display an error message for errors
 */
const Async = (props) => {
  const {
    children,
    error,
    onDismiss,
    btnProps,
    isLoading,
    delay,
  } = props;

  return (
    <ErrorMessage error={error} onDismiss={onDismiss} btnProps={btnProps}>
      <LoadingIndicator isLoading={isLoading} delay={delay}>
        {children}
      </LoadingIndicator>
    </ErrorMessage>
  );
};

Async.propTypes = {
  /** Props to pass to `Button` in error message */
  btnProps: T.object,

  /** Content to render */
  children: T.node,

  /** Delay until showing the loading indicator */
  delay: T.number,

  /** Error to render */
  error: T.string,

  /** Render loading indicator if true */
  isLoading: T.oneOfType([
    T.number,
    T.bool,
  ]),

  /** Action to remove the error */
  onDismiss: T.func,
};

Async.defaultProps = {
  btnProps: undefined,
  children: null,
  delay: 200,
  error: null,
  isLoading: false,
  onDismiss: () => {},
};

export default Async;
