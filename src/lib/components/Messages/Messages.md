```jsx
  const { connect } = require('react-redux');
  const { messagesActions } = require('state-template');

  const store = { 
    messages: { 
      byId: {},
      allIds: [],
    },
  };

  class MessagesExample extends React.Component {
    constructor(props) {
      super(props);
      // THIS IS NORMALLY NOT NEEDED, USE ARROW SYNTAX INSTEAD...
      this.getMessage = this.getMessage.bind(this);
    }

    // write this as getMessage = () => { ... } instead normally...
    // must be this way due to compilier
    getMessage(variant) {
      const { registerMessage } = this.props;

      return () => registerMessage({
        variant,
        id: Math.random(),
        header: 'optional header...',
        children: `variant: ${variant}`,
        footer: 'optional footer...',
      });
    }

    render() {
      // YOU DO NOT NEED <StatusMessage /> AS IT IS
      // NORMALLY IN THE GLOBAL APP.
      return (
        <>
          <Messages />
          <Button text={'default message'} onClick={this.getMessage('default')} />
          <Button text={'understated message'} onClick={this.getMessage('understated')} />
          <Button text={'overstated message'} onClick={this.getMessage('overstated')} />
          <Button text={'standout message'} onClick={this.getMessage('standout')} />
          <Button text={'primary message'} onClick={this.getMessage('primary')} />
          <Button text={'danger message'} onClick={this.getMessage('danger')} />
          <Button text={'inverted message'} onClick={this.getMessage('inverted')} />
        </>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    registerMessage: props => dispatch(messagesActions.registerMessage(props)),
  });

  const WithRedux = connect(null, mapDispatchToProps)(MessagesExample);

  <ExampleRedux store={store}>
    <WithRedux />
  </ExampleRedux>
```
