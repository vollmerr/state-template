import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Messages from './Messages';
import * as actions from './actions';
import * as selectors from './selectors';

export const mapStateToProps = createStructuredSelector({
  messages: selectors.getMessages(),
});

export const mapDispatchToProps = (dispatch) => ({
  clearMessage: (id) => dispatch(actions.clearMessage(id)),
});

const ConnectedMessages = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default ConnectedMessages;
