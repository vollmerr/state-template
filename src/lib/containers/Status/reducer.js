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
    [action.payload.key]: action.payload,
  },
});

const clearMessage = (state, action) => {
  const messages = { ...state.messages };
  delete messages[action.payload];
  return ({ ...state, messages });
};

export default handleActions({
  [C.INCREASE_LOADING]: increaseLoading,
  [C.DECREASE_LOADING]: decreaseLoading,
  [C.SET_ERROR]: setError,
  [C.REGISTER_MESSAGE]: registerMessage,
  [C.CLEAR_MESSAGE]: clearMessage,
}, initialState);
