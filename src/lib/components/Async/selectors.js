import { createSelector } from 'reselect';

export const selectAsync = state => state.async;

export const getIsLoading = () => createSelector(selectAsync, state => state.isLoading);
export const getError = () => createSelector(selectAsync, state => state.error);
