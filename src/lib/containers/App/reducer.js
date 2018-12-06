import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  routing: {
    routes: [],
    hash: '/',
    contactLink: '/help',
  },
  display: {
    isMobileOpen: false,
    isSettingsOpen: false,
  },
  status: {
    isLoading: 0,
    error: null,
  },
};

export const routingReducer = (state, action) => ({
  ...state,
  routing: {
    ...state.routing,
    ...action.payload,
  },
});

export const displayReducer = (state, action) => ({
  ...state,
  display: {
    ...state.display,
    ...action.payload,
  },
});

export const statusReducer = (state, action) => ({
  ...state,
  status: {
    ...state.status,
    ...action.payload,
  },
});

export default handleActions({
  [C.UPDATE_ROUTING]: routingReducer,
  [C.UPDATE_DISPLAY]: displayReducer,
  [C.UPDATE_STATUS]: statusReducer,
}, initialState);
