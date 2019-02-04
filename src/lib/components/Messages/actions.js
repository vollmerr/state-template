import { createAction } from 'redux-actions';

import * as C from './constants';

export const registerMessage = createAction(C.REGISTER_MESSAGE);
export const clearMessage = createAction(C.CLEAR_MESSAGE);
