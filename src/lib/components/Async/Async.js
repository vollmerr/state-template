import React from 'react';
import T from 'prop-types';

import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingIndicator';

/**
 * Async sections have a loading indicator if they take too long
 * to load, and display an error message for errors
 */
class Async extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      children,
      error,
      onDismiss,
      btnProps,
      isLoading,
      delay,
    } = this.props;

    return (
      <ErrorMessage error={error} onDismiss={onDismiss} btnProps={btnProps}>
        <LoadingIndicator isLoading={isLoading} delay={delay}>
          {children}
        </LoadingIndicator>
      </ErrorMessage>
    );
  }
}

Async.propTypes = {
  /** Content to display */
  children: T.node,
  /** Error to render */
  error: T.string,
  /** Action to remove the error */
  onDismiss: T.func,
  /** Props to pass to `Button` in error message */
  btnProps: T.object,
  /** Display loading indicator if true */
  isLoading: T.oneOfType([
    T.number,
    T.bool,
  ]).isRequired,
  /** Delay until showing the loading indicator */
  delay: T.number,
};

Async.defaultProps = {
  children: null,
  error: null,
  onDismiss: () => {},
  btnProps: undefined,
  delay: 200,
};

export default Async;
