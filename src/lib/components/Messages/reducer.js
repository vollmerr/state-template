import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  byId: {},
  allIds: [],
};

export const registerMessage = (state, action) => {
  const { id } = action.payload;

  return ({
    ...state,
    byId: {
      ...state.byId,
      [id]: action.payload,
    },
    allIds: [...state.allIds, id],
  });
};

export const clearMessage = (state, action) => {
  const id = action.payload;

  return ({
    ...state,
    byId: {
      ...state.byId,
      [id]: null,
    },
    allIds: state.allIds.filter(x => x !== id),
  });
};

export default handleActions({
  [C.REGISTER_MESSAGE]: registerMessage,
  [C.CLEAR_MESSAGE]: clearMessage,
}, initialState);
