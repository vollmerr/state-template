import React from 'react';
import T from 'prop-types';

import Card from '../Card';

class StatusMessages extends React.Component { // eslint-disable-line
  render() {
    const { messages, onDismiss } = this.props;
    const messageValues = Object.values(messages);

    if (!messageValues.length) {
      return null;
    }

    return (
      <div className={'status-messages'}>
        {
          messageValues.map(x => (
            <Card {...x} onDismiss={() => onDismiss(x.key)} />
          ))
        }
      </div>
    );
  }
}

StatusMessages.propTypes = {
  messages: T.object.isRequired,
  onDismiss: T.func.isRequired,
};

export default StatusMessages;
