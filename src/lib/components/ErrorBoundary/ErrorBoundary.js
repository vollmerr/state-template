import React from 'react';
import T from 'prop-types';

import ErrorMessage from './ErrorMessage';

/**
 * Error boundary for catching errors and
 * rendering for passed in errors
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUnmount() {
    const { onDismiss } = this.props;
    onDismiss();
  }

  renderError = () => {
    const { error, btnProps, onDismiss } = this.props;

    // attach clearing the error onClick
    if (btnProps) {
      const passedOnClick = btnProps.onClick;
      btnProps.onClick = (event) => {
        onDismiss();
        passedOnClick(event);
      };
    }

    return <ErrorMessage error={error} btnProps={btnProps} />;
  }

  componentDidCatch() {
    // TODO: setup error logging service.... (Henry)
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { children, error } = this.props;
    const { hasError } = this.state;
    // catches both local errors and api errors
    if (hasError || error) {
      return this.renderError();
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  /** Content to render when no error */
  children: T.node,
  /** Props to pass to `Button` in error message */
  btnProps: T.object,
  /** Provided by redux, error to render */
  error: T.string,
  /** Action to remove the error */
  onDismiss: T.func,
};

ErrorBoundary.defaultProps = {
  children: null,
  btnProps: undefined,
  error: null,
  onDismiss: () => {},
};

export default ErrorBoundary;
