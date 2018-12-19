
```jsx
  const store = { status: { isLoading: 0 } };

  <ExampleRedux store={store}>
    <LoadingSection>
      <p>content goes here...</p>
    </LoadingSection>
  </ExampleRedux>
```

### with loading indicator

```jsx
  const store = { status: { isLoading: 2 } };

  <ExampleRedux store={store}>
    <LoadingSection>
      <p>content goes here...</p>
    </LoadingSection>
  </ExampleRedux>
```

### with adjusted delay

```jsx
  const store = { status: { isLoading: 2 } };

  <ExampleRedux store={store}>
    <LoadingSection delay={3000}>
      <p>content goes here...</p>
    </LoadingSection>
  </ExampleRedux>
```
