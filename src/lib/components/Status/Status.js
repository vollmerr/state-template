import React from 'react';

export const StatusContext = React.createContext({
  error: null,
  isLoading: 0,
  messages: {},
});

class Status extends React.Component {
  render() {
    const status = this.context;

    return (
      <button
        {...props}
        style={{ backgroundColor: status.isLoading }}
      />
    );
  }
}

Status.contextType = StatusContext;

export default Status;
