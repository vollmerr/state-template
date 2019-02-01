import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Async from './Async';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = createStructuredSelector({
  isLoading: selectors.getIsLoading(),
  error: selectors.getError(),
});

export const mapDispatchToProps = dispatch => ({
  onDismiss: () => dispatch(actions.setError(null)),
});

const ConnectedAsync = connect(mapStateToProps, mapDispatchToProps)(Async);

export default ConnectedAsync;
