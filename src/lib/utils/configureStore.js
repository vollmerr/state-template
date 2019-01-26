import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { fork, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { messagesReducer } from '../components/Messages';

const registerReducers = reducers => combineReducers({
  form: formReducer,
  messages: messagesReducer,
  ...reducers,
});

const registerSagas = sagas => function* rootSaga() {
  yield all([
    ...sagas.map(x => fork(x)),
  ]);
};

// configure store to register reducers and sagas in combination
// with our reducers and sags, and add dev tools
const configureStore = (options = {}) => {
  const {
    initialState = {},
    reducers = {},
    sagas = [],
    middleware = [],
  } = options;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, ...middleware];

  const rootReducer = registerReducers(reducers);
  const rootSaga = registerSagas(sagas);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
