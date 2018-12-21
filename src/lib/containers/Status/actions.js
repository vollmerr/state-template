import { createAction } from 'redux-actions';

import * as C from './constants';

// loading status
export const increaseLoading = createAction(C.INCREASE_LOADING);
export const decreaseLoading = createAction(C.DECREASE_LOADING);

// error status
export const setError = createAction(C.SET_ERROR);

// status message
export const registerMessage = createAction(C.REGISTER_MESSAGE);
export const clearMessage = createAction(C.CLEAR_MESSAGE);
