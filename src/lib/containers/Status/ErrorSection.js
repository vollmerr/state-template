import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from '../Global/actions';
import * as selectors from '../Global/selectors';

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
  children: T.node,
  btnProps: T.object,
  error: T.string.isRequired,
  updateStatus: T.func.isRequired,
};

ErrorSection.defaultProps = {
  btnProps: undefined,
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
