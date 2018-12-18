import { createSelector } from 'reselect';

import { selectGlobal } from '../App/selectors';

export const selectAuth = state => selectGlobal(state).auth;

export const getIsAuthenticated = () => createSelector(selectAuth, x => x.isAuthenticated);
