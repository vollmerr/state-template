import React from 'react';
import T from 'prop-types';

import { isEmptyRadio } from '../../utils/validate';
import FieldWrapper from './FieldWrapper';
import withField from './withField';

// individual radio button, applies state-template styling
const RadioButton = ({
  input, value, label, primary, disabled, // eslint-disable-line react/prop-types
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

  if (primary) {
    return (
      <label className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={'btn btn-lg btn-block bg-highlight--checked rounded-0'}>{label}</span>
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

// group of radio buttons with optional help text and label
// displays error if validation fails
const FieldRadioButtons = (props) => {
  const {
    input, options, primary, disabled,
  } = props;

  return (
    <FieldWrapper {...props}>
      <div>
        {
          options.filter(x => !x.hidden).map(option => (
            <RadioButton
              input={input}
              key={option.value}
              primary={primary}
              disabled={disabled}
              {...option}
            />
          ))
        }
      </div>
    </FieldWrapper>
  );
};


FieldRadioButtons.propTypes = {
  /** Use `primary` styling */
  primary: T.bool,
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

FieldRadioButtons.defaultProps = {
  primary: false,
  disabled: false,
};

const withReduxField = withField(isEmptyRadio);
export default withReduxField(FieldRadioButtons);
