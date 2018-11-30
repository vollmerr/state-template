import { createAction } from 'redux-actions';

import * as C from './constants';

export const updateRouting = createAction(C.UPDATE_ROUTING);
export const updateDisplay = createAction(C.UPDATE_DISPLAY);
export const updateStatus = createAction(C.UPDATE_STATUS);
