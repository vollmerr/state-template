import { createSelector } from 'reselect';

export const selectGlobal = state => state.global;

export const selectApp = state => selectGlobal(state).app;

export const getIsMobileOpen = () => createSelector(selectApp, x => x.isMobileOpen);
export const getIsSettingsOpen = () => createSelector(selectApp, x => x.isSettingsOpen);
