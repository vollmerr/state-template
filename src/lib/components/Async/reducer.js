import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  isLoading: 0,
  error: null,
};

export const increaseLoading = (state) => ({
  ...state,
  isLoading: state.isLoading + 1,
});

export const decreaseLoading = (state) => ({
  ...state,
  isLoading: state.isLoading - 1,
});

export const setError = (state, action) => ({
  ...state,
  error: action.payload,
});

export default handleActions({
  [C.INCREASE_LOADING]: increaseLoading,
  [C.DECREASE_LOADING]: decreaseLoading,
  [C.SET_ERROR]: setError,
}, initialState);
