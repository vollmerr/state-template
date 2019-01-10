import React from 'react';
import T from 'prop-types';

// individual checkbox, applies state-template styling
const Checkbox = ({
  input, value, label, variant, disabled,
}) => {
  const normalizedValue = Array.isArray(input.value)
    ? input.value
    : [input.value];
  const checked = normalizedValue.includes(value);
  const onChange = (event) => {
    const newValue = [...normalizedValue];
    if (newValue[0] === '') {
      newValue.shift();
    }
    if (event.target.checked) {
      newValue.push(value);
    } else {
      newValue.splice(newValue.indexOf(value), 1);
    }
    return input.onChange(newValue);
  };

  const inputProps = {
    disabled,
    checked,
    onChange,
    type: 'checkbox',
    name: input.name,
  };

  if (variant) {
    return (
      <label className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-md btn-block color-white--checked bg-${variant}--checked rounded-0`}>{label}</span>
      </label>
    );
  }

  return (
    <label className={'form-check-inline p-l-md m-l-0 m-r-md'}>
      <input className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-checkbox'}>
        <i className={'ca-gov-icon-check-mark'} />
      </div>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'primary',
  ]),
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,
  /** Value of checkbox */
  value: T.string.isRequired,
  /** Label to display for this checkbox */
  label: T.string.isRequired,
  /** Disable the input */
  disabled: T.bool,
};

Checkbox.defaultProps = {
  variant: '',
  disabled: false,
};

export default Checkbox;
