/* eslint no-useless-escape: 0 */
const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /\d\d\d-\d\d\d-\d\d\d\d/,
};

export const isEmptyText = value => (
  !value || (typeof value !== 'string')
    ? 'Required'
    : undefined
);

export const isEmptyRadio = value => (
  !value && Number.isNaN(Number(value))
    ? 'Required'
    : undefined
);

export const isEmptyCheck = value => (
  (!!value && !value.length) || (typeof value !== 'object')
    ? 'Required'
    : undefined
);

export const isValidEmail = value => (
  !!value && !regex.email.test(value)
    ? 'Invalid email. Must be in example@domain.com format.'
    : undefined
);

export const isValidPhone = value => (
  !!value && !regex.phone.test(value)
    ? 'Invalid Phone Number. Must be in 999-999-9999 format.'
    : undefined
);

export const isInvalidDate = value => (
  !value
    ? 'Invalid Date, plase select from the date picker.'
    : undefined
);
