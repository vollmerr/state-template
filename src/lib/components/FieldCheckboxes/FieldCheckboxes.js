import React from 'react';
import T from 'prop-types';

import { isEmptyCheck } from '../../utils/validate';
import * as propTypes from '../../utils/propTypes';
import withField from '../../utils/withField';

import FieldWrapper from '../FieldWrapper';
import Checkbox from './Checkbox';

// group of checkboxes with optional help text and label
// displays error if validation fails
export const FieldCheckboxes = (props) => {
  const {
    input, options, variant, disabled, ...rest
  } = props;
  const { name } = input;

  return (
    <FieldWrapper data-test={'field-checkboxes'} name={name} disabled={disabled} {...rest}>
      <div className={'field-check'}>
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
  options: T.arrayOf(propTypes.option).isRequired,

  /** Disable the input */
  disabled: T.bool,
};

FieldCheckboxes.defaultProps = {
  variant: '',
  disabled: false,
};

const withReduxField = withField(isEmptyCheck);
export default withReduxField(FieldCheckboxes);
