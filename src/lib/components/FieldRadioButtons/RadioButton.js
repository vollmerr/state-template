import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import * as propUtils from '../../utils/propTypes';

// individual radio button, applies state-template styling
const RadioButton = (props) => {
  const {
    name,
    value,
    option,
    inline,
    variant,
    disabled,
    onChange,
    className,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedby,
  } = props;

  const id = `${name}-${option.value}`;
  const inputProps = {
    id,
    name,
    disabled,
    type: 'radio',
    checked: value === option.value,
    onChange: () => onChange(option.value),
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedby,
  };

  let cn = classNames([
    'check',
    className,
  ]);

  if (variant) {
    return (
      <label data-test={'field--radio-button'} className={cn} htmlFor={id}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-lg btn-block bg-${variant}--checked rounded-0`}>
          <div>{option.label}</div>
        </span>
      </label>
    );
  }

  cn = classNames([
    'p-l-md m-l-0 m-r-md',
    className,
    inline ? 'form-check-inline' : 'form-check',
  ]);

  return (
    <label data-test={'field--radio-button'} className={cn} htmlFor={id}>
      <input id={id} className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-radio'} aria-hidden>
        <i />
      </div>
      <div>{option.label}</div>
    </label>
  );
};

RadioButton.propTypes = {
  /** Name of field */
  name: T.string.isRequired,

  /** Value of radio button */
  value: T.string.isRequired,

  /** Option to select */
  option: propUtils.option.isRequired,

  /** Display inline */
  inline: T.bool,

  /** Use style variant */
  variant: T.oneOf([
    '',
    'highlight',
  ]),

  /** Disable the input */
  disabled: T.bool,

  /** Called when radio button changes */
  onChange: T.func.isRequired,

  /** Class name to attach to top level label */
  className: T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string.isRequired,

  /** Accessible indicator of related information */
  'aria-describedby': T.string,
};

RadioButton.defaultProps = {
  inline: false,
  variant: '',
  disabled: false,
  className: '',
  'aria-describedby': null,
};

export default RadioButton;
