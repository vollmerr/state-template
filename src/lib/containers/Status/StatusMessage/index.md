```jsx
  const store = { status: { messages: [] } };

  <ExampleRedux store={store}>
    <p>content goes here...</p>
    <StatusMessage />
  </ExampleRedux>
```

### with status messages

```jsx
  const store = { 
    status: { 
      messages: [ 
        { name: 'message1', message: 'message 1' },
      ],
    },
  };

  <ExampleRedux store={store}>
    <p>content goes here...</p>
    <StatusMessage />
  </ExampleRedux>
```
