import { call } from 'redux-saga/effects';
import decode from 'jwt-decode';
import { request } from './api';

export const TOKEN = 'id_token';
export const DEFAULT_EXPIRE = 1000;

/**
 * Sets a token for authenication in localStorage
 * @param {String} token  - token to set
 */
export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

/**
 * Gets the authenication token from localStorage
 * @return {String}     - authenication token
 */
export function getToken() {
  return localStorage.getItem(TOKEN);
}

/**
 * Clears the authenication token from localStorage
 */
export function clearToken() {
  localStorage.removeItem(TOKEN);
}

/**
 * Helper function to valdate that token exists and is not expired
 * @param {object} token  - jwt toke
 * @return {bool}         - valid ? true : false
 */
export function validToken(token) {
  try {
    const { exp } = decode(token);
    const now = Date.now() / 1000;

    return Number(exp) > now;
  } catch (e) {
    return false;
  }
}

/**
 * Authenticates a user
 * Checks local storage for token first
 * @param {Object} action   - redux action to dispatch (must have 'type')
 * @param {Number} maxTries - max tries to re attempt authenicating on fail
 */
export function* authenticate({
  url,
  options = {},
  tokenKey = 'id_token',
  maxTries = 3,
}) {
  let token = getToken();
  let tries = 0;
  let error = new Error('Failed to authenticate');

  // if valid local token use that
  if (validToken(token)) {
    return decode(token);
  }

  // otherwise try getting one a few times
  while (tries < maxTries && !validToken(token)) {
    try {
      const newOptions = {
        method: 'get',
        ...options,
        headers: {
          ...options.headers || { 'Content-Type': 'application/json' },
        },
      };
      const response = yield call(request, url, newOptions);
      token = response[tokenKey];
      // set token into local storage for future authentication caching
      setToken(token);
      return decode(token);
    } catch (err) {
      error = err;
      tries += 1;
    }
  }

  throw error;
}
