import React from 'react';
import T from 'prop-types';

import ErrorMessage from './ErrorMessage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
    // TODO: setup error logging service.... (Henry)
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <ErrorMessage error={error} />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  /** Content to render when no error */
  children: T.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
