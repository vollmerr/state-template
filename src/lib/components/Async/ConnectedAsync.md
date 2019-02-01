```jsx
  const { connect } = require('react-redux');
  const { asyncActions } = require('state-template');
  
  // example redux initial store
  const store = { 
    async: {
      isLoading: 0,
      error: null,
    },
  };

  class ExampleAsync extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasErrorBtn: false,
        delay: 200,
      };
      // binding due to compilier not being able to use arrow functions...
      this.toggleError = this.toggleError.bind(this);
      this.toggleErrorBtn = this.toggleErrorBtn.bind(this);
      this.toggleLoading = this.toggleLoading.bind(this);
      this.increaseDelay = this.increaseDelay.bind(this);
      this.decreaseDelay = this.decreaseDelay.bind(this);
    }

    toggleError() {
      const { error, setError } = this.props;
      setError(error ? null : 'Example Errorz...');
    }
        
    toggleErrorBtn() {
      const { hasErrorBtn } = this.state;
      this.setState({ hasErrorBtn: !hasErrorBtn });
    }

    toggleLoading() { 
      const { isLoading, increaseLoading, decreaseLoading } = this.props;

      if (isLoading) {
        decreaseLoading();
      } else {
        increaseLoading();
      }
    }

    increaseDelay() { 
      const { delay } = this.state;
      this.setState({ delay: delay + 100 });
    }

    decreaseDelay() { 
      const { delay } = this.state;
      this.setState({ delay: delay - 100 });
    }

    render() {
      const { hasErrorBtn, delay } = this.state;

      let btnProps;
      if (hasErrorBtn) {
        btnProps = {        
          text: 'Clear Error',
          variant: 'primary',
          onClick: () => alert('clicked me!'),
        };
      }

      return (
        <>
          <ButtonRow>
            <Button text={'Toggle loading'} onClick={this.toggleLoading} />
            <Button text={'Increase delay'} onClick={this.increaseDelay} />
            <Button text={'Decrease delay'} onClick={this.decreaseDelay} />
            <Button text={'Toggle Error'} onClick={this.toggleError} />
            <Button text={'Toggle Error Button'} onClick={this.toggleErrorBtn} active={hasErrorBtn} />
          </ButtonRow>
          <p>Delay: {delay}ms</p>
          
          <ConnectedAsync delay={delay} btnProps={btnProps}>
            <p>Content goes here...</p>
          </ConnectedAsync>
        </>
      );
    }
  }

  const mapStateToProps = state => ({
    isLoading: state.async.isLoading,
    error: state.async.error,
  })

  const mapDispatchToProps = dispatch => ({
    setError: props => dispatch(asyncActions.setError(props)),
    increaseLoading: () => dispatch(asyncActions.increaseLoading()),
    decreaseLoading: () => dispatch(asyncActions.decreaseLoading()),
  });

  const WithRedux = connect(mapStateToProps, mapDispatchToProps)(ExampleAsync);

  <ExampleRedux store={store}>
    <WithRedux />
  </ExampleRedux>
```
