import React from 'react';
import T from 'prop-types';

import { isEmptyRadio } from '../../../utils/validate';

import FieldWrapper from '../FieldWrapper';
import withField from '../withField';
import RadioButton from './RadioButton';

// group of radio buttons with optional help text and label
// displays error if validation fails
const FieldRadioButtons = (props) => {
  const {
    input, options, variant, disabled, ...rest
  } = props;

  return (
    <FieldWrapper data-test={'field-radio-buttons'} disabled={disabled} {...rest}>
      <div className={'field-radio'}>
        {
          options.filter(x => !x.hidden).map(option => (
            <RadioButton
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


FieldRadioButtons.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'highlight',
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

FieldRadioButtons.defaultProps = {
  variant: '',
  disabled: false,
};

const withReduxField = withField(isEmptyRadio);
export default withReduxField(FieldRadioButtons);
