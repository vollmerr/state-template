import * as auth from './auth';

export const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
export function parseJSON(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.match('application/json')) {
    return response.json();
  }

  const contentDisposition = response.headers.get('Content-Disposition');
  if (contentDisposition && contentDisposition.match(/filename=/)) {
    return response.blob().then((x) => {
      x.name = contentDisposition.match(/filename=([^;]*)/)[1]; // eslint-disable-line
      return x;
    });
  }
  return null;
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export function request(url, options = {}) {
  // config settings to send api
  const newOptions = {
    ...options,
    headers: {
      ...options.headers || {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': 'Content-Disposition',
      },
    },
  };

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON);
}


/**
 * Requests a URL with jwt token in header for authorization, returning a promise
 * Waits until jwt token is set in localStorage before making call
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export function requestWithToken(url, options = {}) {
  const token = auth.getToken();
  // config settings to send api
  const newOptions = {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers || { 'Content-Type': 'application/json' },
    },
  };

  return request(url, newOptions);
}

export const shouldFetch = (lastFetched, cacheTime = 300000) => {
  const date = new Date(lastFetched);
  // invalid date, fetch...
  if (!lastFetched || Number.isNaN(date)) {
    return true;
  }
  // check if set amount of time has passed
  return Date.now() + cacheTime < lastFetched;
};
