import React from 'react';
import { connect } from 'react-redux';

import { globalActions, Button } from '../../lib';

export class StatusMessages extends React.Component {
  registerMessage = () => {
    const { registerMessage } = this.props;
    const key = Math.random();
    registerMessage({
      key, // unique identifier for message
      children: `message ${key}`,
      variant: 'standout',
    });
  }

  render() {
    return (
      <>
        <h2>Status Messages</h2>
        <p>This example shows how to register status messages.</p>
        <Button onClick={this.registerMessage} text={'register a message'} />
      </>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  registerMessage: props => dispatch(globalActions.registerMessage(props)),
});

const withRedux = connect(null, mapDispatchToProps)(StatusMessages);

export default withRedux;
