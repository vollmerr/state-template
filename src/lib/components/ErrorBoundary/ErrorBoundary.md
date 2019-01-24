```jsx
  class ExampleError extends React.Component {
        constructor(props) {
      super(props);
      this.state = { error: null };
      // binding due to compilier not being able to use arrow functions...
      this.setError = this.setError.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }

    setError() { this.setState({ error: 'Example Errorz...' }) }
    dismissError() { this.setState({ error: null }) }

    render() {
      const { error } = this.state;

      return (
        <ErrorBoundary error={error} onDismiss={this.dismissError}>
          <Button text={'Click Me!'} onClick={this.setError} />
        </ErrorBoundary>
      );
    }
  }

  <ExampleError />
```

### with button
```jsx
  class ExampleError extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      // binding due to compilier not being able to use arrow functions...
      this.setError = this.setError.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }

    setError() { this.setState({ error: 'Example Errorz...' }) }
    dismissError() { this.setState({ error: null }) }

    render() {
      const { error } = this.state;

      const btnProps = {
        text: 'Clear Error',
        variant: 'primary',
        onClick: () => alert('clicked me!'),
      };

      return (
        <ErrorBoundary 
          error={error} 
          onDismiss={this.dismissError}
          btnProps={btnProps}
        >
          <Button text={'Click Me!'} onClick={this.setError} />
        </ErrorBoundary>
      );
    }
  }

  <ExampleError />
```
