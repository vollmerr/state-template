import React from 'react';
import { connect } from 'react-redux';

import { globalActions, Button } from '../../lib';

import Page from '../Page';

export class StatusMessages extends React.Component {
  registerMessage = () => {
    const { registerMessage } = this.props;
    registerMessage({ name: 'exampleMessage', message: 'example message...' });
  }

  render() {
    return (
      <Page title={'Status Messages'}>
        <p>This example shows how to register status messages.</p>
        <Button onClick={this.registerMessage} text={'register a message'} />
      </Page>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  registerMessage: props => dispatch(globalActions.registerMessage(props)),
});

const withRedux = connect(null, mapDispatchToProps)(StatusMessages);

export default withRedux;
