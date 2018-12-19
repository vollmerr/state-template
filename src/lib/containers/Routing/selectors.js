import { createSelector } from 'reselect';

import { selectGlobal } from '../App/selectors';

export const selectRouting = state => selectGlobal(state).routing;

export const getHash = () => createSelector(selectRouting, x => x.hash);
export const getRoutes = () => createSelector(selectRouting, x => x.routes);
export const getContactLink = () => createSelector(selectRouting, x => x.contactLink);
