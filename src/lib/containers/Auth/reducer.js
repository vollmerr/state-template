import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  isAuthenticated: false,
};

export const authLoginReducer = (state, action) => ({
  ...state,
  ...action.payload,
  isAuthenticated: true,
});

export const authLogoutReducer = state => ({
  ...initialState.auth,
});

export default handleActions({
  [C.AUTH_LOGIN_DONE]: authLoginReducer,
  [C.AUTH_LOGOUT]: authLogoutReducer,
}, initialState);
