import { delay } from 'redux-saga';
import {
  all, takeEvery, put,
} from 'redux-saga/effects';

import * as actions from './actions';
import * as C from './constants';

// handles clearing a short time message was registered
export function* registerMessage(action) {
  const { delayMs = 4000, key } = action.payload;
  yield delay(delayMs);
  yield put(actions.clearMessage(key));
}

export default function* messagesSaga() {
  yield all([
    takeEvery(C.REGISTER_MESSAGE, registerMessage),
  ]);
}
