The following are available to managing the redux state of Async, displayed when using the `ConnectedAsync` component.

### asyncActions
Dispatch actions to redux for updating ConnectedAsync.

### asyncConstants
Names of redux actions available for ConnectedAsync.

### asyncReducer
Root reducer of the ConnectedAsync component.

### asyncSelectors
Used to select the redux state of ConnectedAsync.

### withAsync
Used to wrap sagas (redux-saga) for automatic increase/decreasing of loading and error handling.

For example, wrapping a `exampleSaga` saga:

```tsx
const exampleSaga = (action) => {
  // do async stuff
};

take('EXAMPLE_ACTION', withAsync(exampleSaga));
```

Would generate the same as:

```tsx
const exampleSaga = (action) => {
  try {
    yield put(asyncActions.increaseLoading());
    // do async stuff
  } catch (error) {
     yield put(asyncActions.setError(error));
  } finally {
    yield put(asyncActions.decreaseLoading());
  }
};

take('EXAMPLE_ACTION', exampleSaga)
```
