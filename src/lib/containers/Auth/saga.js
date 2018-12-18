import {
  all, takeEvery, put, select,
} from 'redux-saga/effects';

// import * as C from 'constants';
// import * as auth from '../../utils/auth';
import * as actions from './actions';
import * as selectors from './selectors';

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
    // takeLatest(C.AUTH_LOGIN, auth.login),
  ]);
}
