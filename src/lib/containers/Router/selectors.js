import { createSelector } from 'reselect';

import { selectGlobal } from '../App/selectors';

export const selectRouter = state => selectGlobal(state).router;

export const getHash = () => createSelector(selectRouter, x => x.hash);
export const getRoutes = () => createSelector(selectRouter, x => x.routes);
export const getContactLink = () => createSelector(selectRouter, x => x.contactLink);
