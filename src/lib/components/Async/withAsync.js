import { put } from 'redux-saga/effects';

import * as actions from './actions';

// wraps a saga in default async functionality
export default (saga) => function* withAsync(action) {
  yield put(actions.increaseLoading());

  try {
    yield* saga(action);
  } catch (error) {
    yield put(actions.setError(error));
  } finally {
    yield put(actions.decreaseLoading());
  }
};
