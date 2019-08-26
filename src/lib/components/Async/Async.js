import React from 'react';
import T from 'prop-types';

import Button from '../Button';

import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingIndicator';

/**
 * Async sections have a loading indicator if they take too long
 * to load, and display an error message for errors
 *
 * access the `data-status` attribute for the status of this
 * component (error, loading, or loaded)
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

  let status;

  if (error) {
    status = 'error';
  } else if (isLoading) {
    status = 'loading';
  } else {
    status = 'loaded';
  }

  return (
    <div data-test={'async'} data-status={status}>
      <ErrorMessage error={error} onDismiss={onDismiss} btnProps={btnProps}>
        <LoadingIndicator isLoading={isLoading} delay={delay}>
          {children}
        </LoadingIndicator>
      </ErrorMessage>
    </div>
  );
};

Async.propTypes = {
  /** Props to pass to `Button` in error message */
  btnProps: T.shape(Button.propTypes),

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
