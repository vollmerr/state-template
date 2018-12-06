import { createSelector } from 'reselect';

const selectApp = state => state.app;
const selectRouting = state => selectApp(state).routing;
const selectDisplay = state => selectApp(state).display;
const selectStatus = state => selectApp(state).status;

// routing
export const getHash = () => createSelector(selectRouting, x => x.hash);
export const getRoutes = () => createSelector(selectRouting, x => x.routes);
export const getContactLink = () => createSelector(selectRouting, x => x.contactLink);
// display
export const getIsMobileOpen = () => createSelector(selectDisplay, x => x.isMobileOpen);
export const getIsSettingsOpen = () => createSelector(selectDisplay, x => x.isSettingsOpen);
// status
export const getIsLoading = () => createSelector(selectStatus, x => x.isLoading);
export const getError = () => createSelector(selectStatus, x => x.error);
