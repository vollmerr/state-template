import React from 'react';
import T from 'prop-types';

import Card from '../Card';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.timers = {};
  }

  componentDidUpdate(prevProps) {
    const { messages } = this.props;
    // have new message, set timer for it
    if (messages.length && messages.length !== prevProps.messages.length) {
      this.setTimer(messages[messages.length - 1]);
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
