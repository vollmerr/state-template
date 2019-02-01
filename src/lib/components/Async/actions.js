import { createAction } from 'redux-actions';

import * as C from './constants';

export const setError = createAction(C.SET_ERROR);
export const increaseLoading = createAction(C.INCREASE_LOADING);
export const decreaseLoading = createAction(C.DECREASE_LOADING);
