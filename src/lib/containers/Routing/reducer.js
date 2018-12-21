import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  routes: [],
  hash: '/',
};

export default handleActions({
  [C.UPDATE_ROUTING]: (state, action) => ({ ...state, ...action.payload }),
}, initialState);
