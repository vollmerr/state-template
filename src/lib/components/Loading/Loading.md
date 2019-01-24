```jsx
class ExampleLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, delay: 200 };
    // binding due to compilier not being able to use arrow functions...
    this.toggleLoading = this.toggleLoading.bind(this);
    this.increaseDelay = this.increaseDelay.bind(this);
    this.decreaseDelay = this.decreaseDelay.bind(this);
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
    const { isLoading, delay } = this.state;

    return (
      <>
        <ButtonRow>
          <Button text={'toggle loading'} onClick={this.toggleLoading} />
          <Button text={'increase delay'} onClick={this.increaseDelay} />
          <Button text={'decrease delay'} onClick={this.decreaseDelay} />
        </ButtonRow>
        <p>Delay: {delay}ms</p>
        <Loading isLoading={isLoading} delay={delay}>
          <div>Content Goes Here</div>
        </Loading>
      </>
    );
  }
}

<ExampleLoading />
```
