import { createAction } from 'redux-actions';

import * as C from './constants';

export const loginRequest = createAction(C.LOGIN_REQUEST);
export const loginSuccess = createAction(C.LOGIN_SUCCESS);
export const loginFailure = createAction(C.LOGIN_FAILURE);

export const authUser = createAction(C.AUTH_USER);
export const authUserDone = createAction(C.AUTH_USER_DONE);
