import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import * as propUtils from '../../utils/propTypes';

// individual radio button, applies state-template styling
const RadioButton = (props) => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    disabled,
    inline,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    option,
    value,
    variant,
  } = props;

  const id = `${name}-${option.value}`;
  const inputProps = {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    checked: value === option.value,
    disabled,
    id,
    name,
    ref: inputRef,
    type: 'radio',
  };

  if (onBlur) {
    inputProps.onBlur = () => onBlur(option.value);
  }

  if (onChange) {
    inputProps.onChange = () => onChange(option.value);
  }

  if (onFocus) {
    inputProps.onFocus = () => onFocus(option.value);
  }

  let cn = classNames([
    'check',
    option.className,
  ]);

  if (variant) {
    return (
      <label data-test={'field__radio-button'} className={cn} htmlFor={id}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-lg btn-block bg-${variant}--checked rounded-0`}>
          <div>{option.label}</div>
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
    <label data-test={'field__radio-button'} className={cn} htmlFor={id}>
      <input id={id} className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-radio'} aria-hidden>
        <i />
      </div>
      <div>{option.label}</div>
    </label>
  );
};

RadioButton.propTypes = {
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

  /** Called when radio button is blurred */
  onBlur: T.func,

  /** Called when radio button changes */
  onChange: T.func,

  /** Called when radio button is focused */
  onFocus: T.func,

  /** Option to select */
  option: propUtils.option.isRequired,

  /** Value of radio button */
  value: T.string.isRequired,

  /** Use style variant */
  variant: T.oneOf([
    'highlight',
  ]),
};

RadioButton.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  disabled: false,
  inline: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  variant: null,
};

export default RadioButton;
