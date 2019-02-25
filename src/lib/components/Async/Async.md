```jsx
import { ButtonRow, Button } from 'state-template';

class ExampleAsync extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      hasErrorBtn: false,
      isLoading: false, 
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
    const { error } = this.state;
    this.setState({ error: error ? null : 'Example Errorz...' });
  }
      
  toggleErrorBtn() {
    const { hasErrorBtn } = this.state;
    this.setState({ hasErrorBtn: !hasErrorBtn });
  }

  toggleLoading() { 
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
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
    const { error, hasErrorBtn, isLoading, delay } = this.state;

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
        
        <Async 
          error={error} 
          onDismiss={this.toggleError} 
          btnProps={btnProps} 
          isLoading={isLoading} 
          delay={delay}
        >
          <p>Content goes here...</p>
        </Async>
      </>
    );
  }
}

<ExampleAsync />
```
