
```jsx  
  const store = { status: { error: null } };

  <ExampleRedux store={store}>
    <ErrorSection>
      <p>content goes here...</p>
    </ErrorSection>
  </ExampleRedux>
```

### with error

```jsx
  const store = { status: { error: 'example errorz' } };

  <ExampleRedux store={store}>
    <ErrorSection>
      <p>content goes here...</p>
    </ErrorSection>
  </ExampleRedux>
```

### with button

```jsx
  const store = { status: { error: 'example errorz' } };

  const btnProps = {
    text: 'Clear Error',
    variant: 'primary',
    onClick: () => alert('clicked me!'),
  };

  <ExampleRedux store={store}>
    <ErrorSection btnProps={btnProps}>
      <p>content goes here...</p>
    </ErrorSection>
  </ExampleRedux>
```
