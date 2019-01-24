import React from 'react';
import T from 'prop-types';

import LoadingIndicator from './LoadingIndicator';

/**
 * Displays a blocking loading indicator
 * over content if past the delay
 */
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { delayReached: false };
    this.delayTimer = null;
  }

  componentDidMount() {
    const { isLoading } = this.props;
    if (isLoading) {
      this.setDelay();
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;
    // set a delay for displaying the loading indicator to avoid flashing
    if (isLoading !== prevProps.isLoading) {
      if (isLoading) {
        this.setDelay();
      } else {
        this.clearDelay();
      }
    }
  }

  componentWillUnmount() {
    this.clearDelay();
  }

  setDelay = () => {
    const { delay } = this.props;
    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.setState({ delayReached: true });
      }, delay);
    } else {
      this.setState({ delayReached: true });
    }
  }

  clearDelay = () => {
    clearTimeout(this.delayTimer);
    this.setState({ delayReached: false });
  }

  render() {
    const { children, isLoading } = this.props;
    const { delayReached } = this.state;

    const show = isLoading && delayReached;

    return <LoadingIndicator show={show}>{children}</LoadingIndicator>;
  }
}

Loading.propTypes = {
  /** Display loading indicator if true */
  isLoading: T.oneOfType([
    T.number,
    T.bool,
  ]).isRequired,
  /** Content to display */
  children: T.node,
  /** Delay until showing the loading indicator */
  delay: T.number,
};

Loading.defaultProps = {
  children: null,
  delay: 200,
};

export default Loading;
