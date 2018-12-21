import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from '../actions';
import * as selectors from '../selectors';

class StatusMessage extends React.Component {
  render() {
    const { messages } = this.props;
    const messageValues = Object.values(messages);

    if (!messageValues.length) {
      return null;
    }

    return messageValues.map(x => <h1 key={x.name}>message...</h1>);
  }
}

StatusMessage.propTypes = {
  messages: T.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  messages: selectors.getMessages(),
});

export const mapDispatchToProps = dispatch => ({
  clearMessage: name => dispatch(actions.clearMessage(name)),
});

const withRedux = connect(mapStateToProps)(StatusMessage);

export default withRedux;
