import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  isMobileOpen: false,
  isSettingsOpen: false,
};

export default handleActions({
  [C.UPDATE_DISPLAY]: (state, action) => ({ ...state, ...action.payload }),
}, initialState);
