import React from 'react';
import T from 'prop-types';

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
const Checkbox = ({
  input, value, label, variant, disabled,
}) => {
  const values = Array.isArray(input.value) ? input.value : [input.value];
  const checked = values.includes(value);
  const onChange = handleChange({ value, values, onChange: input.onChange });

  const inputProps = {
    disabled,
    checked,
    onChange,
    type: 'checkbox',
    name: input.name,
  };

  if (variant) {
    return (
      <label data-test={'field-checkbox'} className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-md btn-block color-white--checked bg-${variant}--checked rounded-0`}>{label}</span>
      </label>
    );
  }

  return (
    <label data-test={'field-checkbox'} className={'form-check-inline p-l-md m-l-0 m-r-md'}>
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
