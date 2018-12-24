import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Card from '../../../components/Card';
import * as actions from '../actions';
import * as selectors from '../selectors';

class StatusMessage extends React.Component { // eslint-disable-line
  render() {
    const { messages, clearMessage } = this.props;
    const messageValues = Object.values(messages);

    if (!messageValues.length) {
      return null;
    }

    return (
      <div className={'status-message'}>
        {
          messageValues.map(x => (
            <Card {...x} onDismiss={() => clearMessage(x.key)} />
          ))
        }
      </div>
    );
  }
}

StatusMessage.propTypes = {
  messages: T.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  messages: selectors.getMessages(),
});

export const mapDispatchToProps = dispatch => ({
  clearMessage: key => dispatch(actions.clearMessage(key)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(StatusMessage);

export default withRedux;
