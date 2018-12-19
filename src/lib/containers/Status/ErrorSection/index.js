import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from '../actions';
import * as selectors from '../selectors';

import ErrorMessage from './ErrorMessage';

class ErrorSection extends React.Component {
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

  renderError = () => {
    const { error, btnProps, updateStatus } = this.props;

    // attach clearing the error onClick
    if (btnProps) {
      const passedOnClick = btnProps.onClick;
      btnProps.onClick = (event) => {
        updateStatus({ error: null });
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

ErrorSection.propTypes = {
  /** Content to render when no error */
  children: T.node,
  /** Props to pass to `Button` in error message */
  btnProps: T.object,
  /** Provided by redux, error to render */
  error: T.string,
  /** Provided by redux, action to dispatch for updating the status */
  updateStatus: T.func.isRequired,
};

ErrorSection.defaultProps = {
  btnProps: undefined,
  error: null,
  children: null,
};

export const mapStateToProps = createStructuredSelector({
  error: selectors.getError(),
});

export const mapDispatchToProps = dispatch => ({
  updateStatus: props => dispatch(actions.updateStatus(props)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(ErrorSection);
