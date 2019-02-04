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
      this.setTimer(nextMessages[nextMessages.length - 1].id);
    }
  }

  setTimer = (id) => {
    const { clearMessage, delay } = this.props;

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
      <div className={'status-messages'}>
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
  delay: T.number,
};

Messages.defaultProps = {
  delay: 4000,
};

export default Messages;
