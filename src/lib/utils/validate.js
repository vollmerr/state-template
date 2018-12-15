/* eslint no-useless-escape: 0 */
const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /\d\d\d-\d\d\d-\d\d\d\d/,
  time: /^\d{2}:\d{2} (am|pm)$/,
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
    ? 'Invalid Date, please select from the date picker.'
    : undefined
);

export const isEmptyTime = value => (
  !value || !regex.time.test(value)
    ? 'Required'
    : undefined
);

export const isValidZip = zip => (
  (zip && zip.match(/^\d{5}$/))
    ? undefined
    : 'Please enter a 5 digit zip code. Ex: 95628'
);
