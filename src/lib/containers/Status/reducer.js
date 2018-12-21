import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  isLoading: 0,
  error: null,
  messages: {},
};

const increaseLoading = state => ({
  ...state,
  isLoading: state.isLoading + 1,
});

const decreaseLoading = state => ({
  ...state,
  isLoading: state.isLoading - 1,
});

const setError = (state, action) => ({
  ...state,
  error: action.payload,
});

const registerMessage = (state, action) => ({
  ...state,
  messages: {
    ...state.messages,
    [action.payload.name]: action.payload,
  },
});

const clearMessage = (state, action) => ({
  ...state,
  messages: {
    ...state.messages,
    [action.payload]: undefined,
  },
});

export default handleActions({
  [C.INCREASE_LOADING]: increaseLoading,
  [C.DECREASE_LOADING]: decreaseLoading,
  [C.SET_ERROR]: setError,
  [C.REGISTER_MESSAGE]: registerMessage,
  [C.CLEAR_MESSAGE]: clearMessage,
}, initialState);
