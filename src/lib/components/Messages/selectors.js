import { createSelector } from 'reselect';

export const selectMessages = state => state.messages;

export const getMessages = () => createSelector(selectMessages, state => (
  state.allIds.map(id => state.byId[id])
));
