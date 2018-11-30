import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { fork, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import stateTemplateReducer from '../containers/StateTemplate/reducer';
import stateTemplateSaga from '../containers/StateTemplate/saga';

// register all reducers here...
const rootReducer = combineReducers({
  form: formReducer,
  stateTemplate: stateTemplateReducer,
});

// register all sagas here...
function* rootSaga() {
  yield all([
    fork(stateTemplateSaga),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  // add in other middlewares here
  const middlewares = [
    sagaMiddleware,
  ];

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
