import React from 'react';
import T from 'prop-types';

import * as propUtils from '../../utils/propTypes';

// handle changing array value in redux form
export const handleChange = ({ value, values, onChange }) => (event) => {
  const newValues = [...values];
  // first element is blank, remove it
  if (newValues[0] === '') {
    newValues.shift();
  }
  // is checked, add it to array
  if (event.target.checked) {
    newValues.push(value);
  } else {
    // not checked, remove from array
    newValues.splice(newValues.indexOf(value), 1);
  }
  // update in redux form
  return onChange(newValues);
};

// individual checkbox, applies state-template styling
const Checkbox = (props) => {
  const {
    name,
    value,
    option,
    variant,
    disabled,
    onChange,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedby,
  } = props;

  const values = Array.isArray(value) ? value : [value];

  const id = `${name}-${option.value}`;
  const inputProps = {
    id,
    name,
    disabled,
    type: 'checkbox',
    checked: values.includes(option.value),
    onChange: handleChange({ value: option.value, values, onChange }),
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedby,
  };

  if (variant) {
    return (
      <label data-test={'field--checkbox'} className={'check'} htmlFor={id}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-md btn-block color-white--checked bg-${variant}--checked rounded-0`}>
          {option.label}
        </span>
      </label>
    );
  }

  return (
    <label data-test={'field--checkbox'} className={'form-check-inline p-l-md m-l-0 m-r-md'} htmlFor={id}>
      <input className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-checkbox'} aria-hidden>
        <i className={'ca-gov-icon-check-mark'} />
      </div>
      {option.label}
    </label>
  );
};

Checkbox.propTypes = {
  /** Name of field */
  name: T.string.isRequired,

  /** Value of checkbox */
  value: T.oneOfType([
    T.string,
    T.array,
  ]).isRequired,

  /** Option to select */
  option: propUtils.option.isRequired,

  /** Use style variant */
  variant: T.oneOf([
    '',
    'primary',
  ]),

  /** Disable the input */
  disabled: T.bool,

  /** Label to render for this checkbox */
  label: T.string,

  /** Called when checkbox changes */
  onChange: T.func.isRequired,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string.isRequired,

  /** Accessible indicator of related information */
  'aria-describedby': T.string,
};

Checkbox.defaultProps = {
  variant: '',
  disabled: false,
  label: null,
  'aria-describedby': null,
};

export default Checkbox;
