// export const TOKEN = 'id_token';

// /**
//  * Sets a token for authenication in localStorage
//  *
//  * @param {String} token  - token to set
//  */
// export function setToken(token) {
//   localStorage.setItem(TOKEN, token);
// }

// /**
//  * Gets the authenication token from localStorage
//  * @return {String}     - authenication token
//  */
// export function getToken() {
//   return localStorage.getItem(TOKEN);
// }

// /**
//  * Clears the authenication token from localStorage
//  */
// export function clearToken() {
//   localStorage.removeItem(TOKEN);
// }

// /**
//  * Helper function to valdate that token exists and is not expired
//  *
//  * @param {object} token  - jwt token
//  *
//  * @return {bool}         - valid ? true : false
//  */
// export function validToken(token) {
//   try {
//     const { exp } = decode(token);
//     const now = new Date().getTime().toString().substring(0, 10);

//     return Number(exp) > Number(now);
//   } catch (e) {
//     return false;
//   }
// }

// /**
//  * Helper function to put jwt token into global redux store
//  *
//  * @param {String} token    - jwt token
//  *
//  * @return {Number}         - exipration time
//  */
// export function* putToken(token) {
//   try {
//     const {
//       sub: sam,
//       exp,
//       iat,
//       ...rest
//     } = decode(token);

//     const expire = (exp - iat) * 1000; // convert from ms to s

//     yield put(authUserDone({ sam, expire, ...rest }));
//     return expire;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
