import { delay } from 'redux-saga';
import {
  all, takeEvery, put,
} from 'redux-saga/effects';

import * as actions from './actions';
import * as C from './constants';

// catches all requests to update loading status and errors
export function* matchPattern(action) {
  const { type } = action;
  let error = null;

  if (type.match('_REQUEST')) {
    yield put(actions.increaseLoading());
  }

  if (type.match('_SUCCESS')) {
    yield put(actions.decreaseLoading());
  }

  if (type.match('_FAILURE')) {
    error = action.payload && action.payload.message;
    yield put(actions.setError(error));
    yield put(actions.decreaseLoading());
  }
}

// handles clearing a short time message was registered
export function* statusMessage(action) {
  const { delayMs = 4000, name } = action.payload;
  yield delay(delayMs);
  yield put(actions.clearMessage(name));
}

export default function* stateTemplateSaga() {
  yield all([
    takeEvery('*', matchPattern),
    takeEvery(C.REGISTER_MESSAGE, statusMessage),
  ]);
}
