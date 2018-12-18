import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  isLoading: 0,
  error: null,
};

export default handleActions({
  [C.UPDATE_STATUS]: (state, action) => ({ ...state, ...action.payload }),
}, initialState);
