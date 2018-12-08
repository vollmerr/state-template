import React from 'react';
import T from 'prop-types';

// individual radio button, applies state-template styling
const RadioButton = ({
  input, value, label, variant, disabled, // eslint-disable-line react/prop-types
}) => {
  const checked = input.value.toString().indexOf(value) !== -1;
  const onChange = () => input.onChange(value);
  const inputProps = {
    disabled,
    checked,
    onChange,
    type: 'radio',
    name: input.name,
  };

  if (variant) {
    return (
      <label className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-lg btn-block bg-${variant}--checked rounded-0`}>{label}</span>
      </label>
    );
  }

  return (
    <label className={'form-check-inline p-l-md m-l-0 m-r-md'}>
      <input className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-radio'}>
        <i />
      </div>
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'highlight',
  ]),
  /** Input from redux-form's Field, attaches name, value, etc */
  input: T.object.isRequired,
  /** Label of radio button */
  label: T.string.isRequired,
  /** Value of radio button */
  value: T.string.isRequired,
  /** Disable the input */
  disabled: T.bool,
};

RadioButton.defaultProps = {
  variant: '',
  disabled: false,
};

export default RadioButton;
