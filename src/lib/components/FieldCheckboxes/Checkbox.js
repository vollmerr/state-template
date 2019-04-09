import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

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

  return onChange(newValues);
};

// individual checkbox, applies state-template styling
const Checkbox = (props) => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    disabled,
    inline,
    name,
    onBlur,
    onChange,
    onFocus,
    option,
    value,
    variant,
  } = props;

  const values = Array.isArray(value) ? value : [value];

  const id = `${name}-${option.value}`;
  const inputProps = {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    checked: values.includes(option.value),
    disabled,
    id,
    name,
    type: 'checkbox',
  };

  if (onBlur) {
    inputProps.onBlur = () => onBlur(value);
  }

  if (onChange) {
    inputProps.onChange = handleChange({ value: option.value, values, onChange });
  }

  if (onFocus) {
    inputProps.onFocus = () => onFocus(value);
  }

  let cn = classNames([
    'check',
    option.className,
  ]);

  if (variant) {
    return (
      <label data-test={'field__checkbox'} className={cn} htmlFor={id}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-md btn-block color-white--checked bg-${variant}--checked rounded-0`}>
          {option.label}
        </span>
      </label>
    );
  }

  cn = classNames([
    'p-l-md m-l-0 m-r-md',
    option.className,
    inline ? 'form-check-inline' : 'form-check',
  ]);

  return (
    <label data-test={'field__checkbox'} className={cn} htmlFor={id}>
      <input className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-checkbox'} aria-hidden>
        <i className={'ca-gov-icon-check-mark'} />
      </div>
      {option.label}
    </label>
  );
};

Checkbox.propTypes = {
  /** Accessible indicator of related information */
  'aria-describedby': T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Disable the input */
  disabled: T.bool,

  /** Display inline */
  inline: T.bool,

  /** Name of field */
  name: T.string.isRequired,

  /** Called when checkbox is blurred */
  onBlur: T.func,

  /** Called when checkbox is changed */
  onChange: T.func,

  /** Called when checkbox is focused */
  onFocus: T.func,

  /** Option to select */
  option: propUtils.option.isRequired,

  /** Value of checkbox */
  value: T.oneOfType([
    T.string,
    T.array,
  ]).isRequired,

  /** Use style variant */
  variant: T.oneOf([
    'primary',
  ]),
};

Checkbox.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  disabled: false,
  inline: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  variant: null,
};

export default Checkbox;
