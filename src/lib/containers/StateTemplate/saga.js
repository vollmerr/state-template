import {
  all, takeEvery, put, select,
} from 'redux-saga/effects';

import * as selectors from './selectors';
import * as actions from './actions';

// catches all requests to update loading status and errors
export function* matchPattern(action) {
  const { type } = action;
  const isLoading = yield select(selectors.getIsLoading());
  let error = null;

  if (type.match('_REQUEST')) {
    yield put(actions.updateStatus({ isLoading: isLoading + 1 }));
  }

  if (type.match('_SUCCESS')) {
    yield put(actions.updateStatus({ isLoading: isLoading - 1 }));
  }

  if (type.match('_FAILURE')) {
    error = action.payload && action.payload.message;
    yield put(actions.updateStatus({ isLoading: isLoading - 1, error }));
  }
}

export default function* stateTemplateSaga() {
  yield all([
    takeEvery('*', matchPattern),
  ]);
}
