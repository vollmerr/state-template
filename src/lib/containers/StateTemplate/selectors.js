import { createSelector } from 'reselect';

const selectStateTemplate = state => state.stateTemplate;
const selectRouting = state => selectStateTemplate(state).routing;
const selectDisplay = state => selectStateTemplate(state).display;
const selectStatus = state => selectStateTemplate(state).status;

// routing
export const getHash = () => createSelector(selectRouting, x => x.hash);
export const getRoutes = () => createSelector(selectRouting, x => x.routes);
// display
export const getIsMobileOpen = () => createSelector(selectDisplay, x => x.isMobileOpen);
export const getIsSettingsOpen = () => createSelector(selectDisplay, x => x.isSettingsOpen);
// status
export const getIsLoading = () => createSelector(selectStatus, x => x.isLoading);
export const getError = () => createSelector(selectStatus, x => x.error);
