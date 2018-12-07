import React from 'react';
import T from 'prop-types';

import { isEmptyCheck } from '../../utils/validate';
import FieldWrapper from './FieldWrapper';
import withField from './withField';

// individual checkbox, applies state-template styling
const Checkbox = ({
  input, value, label, variant, disabled, // eslint-disable-line react/prop-types
}) => {
  const checked = input.value.toString().indexOf(value) !== -1;
  const onChange = (event) => {
    const newValue = [...input.value];
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

// group of checkboxes with optional help text and label
// displays error if validation fails
export const FieldCheckboxes = (props) => {
  const {
    input, options, variant, disabled,
  } = props;

  const disabledClass = disabled ? 'disabled' : '';

  return (
    <FieldWrapper {...props}>
      <div className={disabledClass}>
        {
          options.filter(x => !x.hidden).map(option => (
            <Checkbox
              input={input}
              key={option.value}
              variant={variant}
              disabled={disabled}
              {...option}
            />
          ))
        }
      </div>
    </FieldWrapper>
  );
};

FieldCheckboxes.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'primary',
  ]),
  /** Input from redux-form's Field, attaches name, value, etc */
  input: T.object.isRequired,
  /** Options to select from */
  options: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      value: T.string.isRequired,
    }),
  ).isRequired,
  /** Disable the input */
  disabled: T.bool,
};

FieldCheckboxes.defaultProps = {
  variant: '',
  disabled: false,
};

const withReduxField = withField(isEmptyCheck);
export default withReduxField(FieldCheckboxes);
