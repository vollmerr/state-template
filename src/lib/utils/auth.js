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
 * Decode the token in local storage
 */
export function decodeToken() {
  const token = getToken();
  return decode(token);
}

/**
 * Authenticates a user
 * Checks local storage for token first
 * @param {Object} url      - url to call for authentication
 * @param {Object} options  - options to pass to api call (method, headers, etc)
 * @param {string} tokenKey - key in response jwt is stored on
 */
export function* authenticate({
  url,
  options = {},
  tokenKey = 'id_token',
}) {
  let token = getToken();

  // if valid local token use that
  if (validToken(token)) {
    return decode(token);
  }

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
    throw err;
  }
}
