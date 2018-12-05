import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from '../actions';
import * as selectors from '../selectors';

import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUnmount() {
    const { updateStatus } = this.props;
    updateStatus({ error: null });
  }

  componentDidCatch() {
    // TODO: setup error logging service.... (Henry)
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { children, error, isLoading } = this.props;
    const { hasError } = this.state;

    if (hasError || error) {
      return <ErrorMessage error={error} />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return children;
  }
}

export const mapStateToProps = createStructuredSelector({
  isLoading: selectors.getIsLoading(),
  error: selectors.getError(),
});

export const mapDispatchToProps = dispatch => ({
  updateStatus: props => dispatch(actions.updateStatus(props)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(Status);
