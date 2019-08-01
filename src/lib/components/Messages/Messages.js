import React from 'react';
import T from 'prop-types';

import Card from '../Card';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.timers = {};
  }

  componentWillReceiveProps(nextProps) {
    const { messages } = this.props;
    const nextMessages = nextProps.messages;

    if (nextMessages.length && messages.length !== nextMessages.length) {
      this.setTimer(nextMessages[nextMessages.length - 1]);
    }
  }

  setTimer = (message) => {
    const { clearMessage } = this.props;
    const { id, delay = 4000 } = message;

    this.timers[id] = setTimeout(() => {
      clearMessage(id);
    }, delay);
  }

  clearTimer = (id) => {
    if (this.timers[id]) {
      clearTimeout(this.timers[id]);
      delete this.timers[id];
    }
  }

  onDismiss = (id) => {
    const { clearMessage } = this.props;
    clearMessage(id);
    this.clearTimer(id);
  }

  render() {
    const { messages } = this.props;

    if (!messages.length) {
      return null;
    }

    return (
      <div data-test={'status-messages'} className={'status-messages'}>
        {
          messages.map(x => (
            <Card key={x.id} {...x} onDismiss={() => this.onDismiss(x.id)} />
          ))
        }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: T.array.isRequired,
  clearMessage: T.func.isRequired,
};

export default Messages;
