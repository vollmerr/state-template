```jsx
  const faker = require('faker');
  const { connect } = require('react-redux');
  const { globalActions } = require('state-template');

  const store = { 
    status: { 
      messages: {},
    },
  };

  const getMessage = () => {
    const variant = faker.random.arrayElement([
      'default',
      'understated',
      'overstated',
      'primary',
      'danger',
      'inverted',
    ]);

    return ({
      variant,
      key: faker.random.uuid(),
      header: 'optional header...',
      children: `variant: ${variant}`,
      footer: 'optional footer...',
    })
  };

  // YOU DO NOT NEED <StatusMessage /> AS IT IS
  // NORMALLY IN THE GLOBAL APP.
  const MessageExample = ({ registerMessage }) => (
    <>
      <p>content...</p>
      <StatusMessage />
      <Button 
        text={'register message'}
        onClick={() => registerMessage(getMessage())}
      />
    </>
  );
  
  const mapDispatchToProps = dispatch => ({
    registerMessage: props => dispatch(globalActions.registerMessage(props)),
  });

  const WithRedux = connect(null, mapDispatchToProps)(MessageExample);

  <ExampleRedux store={store}>
    <WithRedux />
  </ExampleRedux>
```
