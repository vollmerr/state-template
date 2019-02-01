```jsx
  class ExampleMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        messages: [],
      };
      // binding due to compilier not being able to use arrow functions...
      this.getMessage = this.getMessage.bind(this);
      this.clearMessage = this.clearMessage.bind(this);
    }

    getMessage(variant) {
      return () => {
        const { messages } = this.state;

        const newMessage = {
          variant,
          id: Math.random(),
          header: 'optional header...',
          children: `variant: ${variant}`,
          footer: 'optional footer...',
        };
  
        this.setState({ messages: [...messages, newMessage] });
      }
    }

    clearMessage(id) {
      const { messages } = this.state;
      const newMessages = messages.filter(x => x.id !== id);
      this.setState({ messages: newMessages })
    }

    render() {
      const { messages } = this.state;

      return (
        <>
          <Button text={'default message'} onClick={this.getMessage('default')} />
          <Button text={'understated message'} onClick={this.getMessage('understated')} />
          <Button text={'overstated message'} onClick={this.getMessage('overstated')} />
          <Button text={'standout message'} onClick={this.getMessage('standout')} />
          <Button text={'primary message'} onClick={this.getMessage('primary')} />
          <Button text={'danger message'} onClick={this.getMessage('danger')} />
          <Button text={'inverted message'} onClick={this.getMessage('inverted')} />
          <Messages messages={messages} clearMessage={this.clearMessage} />
        </>
      );
    }
  }

  <ExampleMessages />
```
