import * as C from './constants';

export const initialState = {
  byId: {},
  allIds: [],
};

const registerMessage = (state, action) => {
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

const clearMessage = (state, action) => {
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

const messagesReducer = (state = initialState, action) => {
  if (action.type === C.REGISTER_MESSAGE) return registerMessage(state, action);
  if (action.type === C.CLEAR_MESSAGE) return clearMessage(state, action);
  return state;
};

export default messagesReducer;
