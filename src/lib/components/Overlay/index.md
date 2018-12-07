```jsx
class ExampleOverlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  // use arrow syntax here instead of binding above...
  // limitation of styleguidist transpiler..
  toggleOpen() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    
    return (
      <div>
        <Button onClick={this.toggleOpen} text={'open'} />
        <Overlay onClick={this.toggleOpen} show={isOpen} />
      </div>
    );
  }
}

<ExampleOverlay />
```
