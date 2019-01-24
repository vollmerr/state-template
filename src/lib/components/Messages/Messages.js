import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';
import Card from '../Card';

class Messages extends React.Component { // eslint-disable-line
  render() {
    const { messages, onDismiss } = this.props;

    if (!messages.length) {
      return null;
    }

    return (
      <div className={'status-messages'}>
        {
          messages.map(x => (
            <Card key={x.id} {...x} onDismiss={() => onDismiss(x.id)} />
          ))
        }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: T.array.isRequired,
  onDismiss: T.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  messages: selectors.getMessages(),
});

export const mapDispatchToProps = dispatch => ({
  onDismiss: id => dispatch(actions.clearMessage(id)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default withRedux;
