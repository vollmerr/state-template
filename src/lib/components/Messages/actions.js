import * as C from './constants';

export const registerMessage = payload => ({ type: C.REGISTER_MESSAGE, payload });
export const clearMessage = payload => ({ type: C.CLEAR_MESSAGE, payload });
