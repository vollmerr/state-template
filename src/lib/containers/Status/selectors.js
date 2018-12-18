import { createSelector } from 'reselect';

import { selectGlobal } from '../App/selectors';

export const selectStatus = state => selectGlobal(state).status;

export const getIsLoading = () => createSelector(selectStatus, x => x.isLoading);
export const getError = () => createSelector(selectStatus, x => x.error);
