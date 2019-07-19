import React from 'react';
import T from 'prop-types';

/**
 * Indicates content is loading
 */
class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { delayReached: false };
    this.delayTimer = null;
  }

  componentDidMount() {
    const { isLoading } = this.props;
    if (isLoading) {
      this.setTimer();
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;
    // set a delay for displaying the loading indicator to avoid flashing
    if (isLoading !== prevProps.isLoading) {
      this.clearDelayReached();

      if (isLoading) {
        this.setTimer();
      }
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  setDelayReached = () => {
    this.setState({ delayReached: true });
  }

  clearDelayReached = () => {
    this.clearTimer();
    this.setState({ delayReached: false });
  }

  setTimer = () => {
    const { delay } = this.props;
    this.delayTimer = setTimeout(this.setDelayReached, delay);
  }

  clearTimer = () => {
    clearTimeout(this.delayTimer);
  }

  render() {
    const { children, isLoading } = this.props;
    const { delayReached } = this.state;

    const show = Boolean(isLoading && delayReached);

    return (
      <div className={'loading-indicator'}>
        <div className={'loading-content'}>
          {children}
          {
            show
            && (
              <>
                <div className={'loading-overlay'} />
                <div className={'uil-ripple-css'}>
                  <div />
                  <div />
                </div>
              </>
            )
          }
        </div>
      </div>
    );
  }
}

LoadingIndicator.propTypes = {
  /** Display loading indicator if true */
  isLoading: T.oneOfType([
    T.number,
    T.bool,
  ]).isRequired,

  /** Content to render */
  children: T.node,

  /** Delay until showing the loading indicator */
  delay: T.number,
};

LoadingIndicator.defaultProps = {
  children: null,
  delay: 200,
};

export default LoadingIndicator;
