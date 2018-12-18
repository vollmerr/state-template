import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LoadingMessage from './LoadingMessage';

import * as selectors from '../selectors';

class LoadingSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { delayReached: false };
    this.delayTimer = null;
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;
    // set a delay for displahying the loading indicator to avoid flashing
    if (isLoading !== prevProps.isLoading) {
      if (isLoading) {
        this.setDelay();
      } else {
        this.clearDelay();
      }
    }
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

    if (isLoading && delayReached) {
      return <LoadingMessage />;
    }

    return children;
  }
}

LoadingSection.propTypes = {
  isLoading: T.bool.isRequired,
  children: T.node,
  delay: T.number,
};

LoadingSection.defaultProps = {
  children: null,
  delay: 200,
};

export const mapStateToProps = createStructuredSelector({
  isLoading: selectors.getIsLoading(),
});

const withRedux = connect(mapStateToProps);

export default withRedux(LoadingSection);
