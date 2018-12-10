import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { fork, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import globalReducer from '../containers/Global/reducer';
import globalSaga from '../containers/Global/saga';

const registerReducers = reducers => combineReducers({
  form: formReducer,
  global: globalReducer,
  ...reducers,
});

const registerSagas = sagas => function* rootSaga() {
  yield all([
    fork(globalSaga),
    ...sagas.map(x => fork(x)),
  ]);
};

// configure store to register reducers and sagas in combination
// with our reducers and sags, and add dev tools
const configureStore = (options = {}) => {
  const { initialState = {}, reducers = {}, sagas = [] } = options;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

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
