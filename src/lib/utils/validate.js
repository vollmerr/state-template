import * as date from './date';

/* eslint no-useless-escape: 0 */
const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /\d\d\d-\d\d\d-\d\d\d\d/,
};

export const isEmptyText = (value) => (
  !value || (typeof value !== 'string')
    ? 'Required'
    : undefined
);

export const isEmptyRadio = (value) => (
  !value && Number.isNaN(Number(value))
    ? 'Required'
    : undefined
);

export const isEmptyCheck = (value) => (
  value && value.length
    ? undefined
    : 'Required'
);

export const isEmptyFile = (value) => {
  if (value) {
    // multiple files || single file
    if (value.length || value.name) {
      return undefined;
    }
  }
  // nada :(
  return 'Required';
};

export const isValidEmail = (value) => (
  value && !regex.email.test(value)
    ? 'Invalid email. Must be in example@domain.com format.'
    : undefined
);

export const isValidPhone = (value) => (
  value && !regex.phone.test(value)
    ? 'Invalid Phone Number. Must be in 999-999-9999 format.'
    : undefined
);

export const isValidDate = (value) => (
  date.isValid(value)
    ? undefined
    : 'Invalid Date, please select from the date picker.'
);

export const isValidZip = (zip) => (
  zip && zip.match(/^\d{5}$/)
    ? undefined
    : 'Please enter a 5 digit zip code. Ex: 95628'
);
