import React from 'react';
import T from 'prop-types';

import { isInvalidDate } from '../../utils/validate';
import withField from '../../utils/withField';

import FieldWrapper from '../FieldWrapper';
import DatePicker from './DatePicker';

// Date picker for redux-form using pikaday library
export const FieldDate = (props) => {
  const {
    input, disabled, minDate, ...rest
  } = props;
  const { name } = input;

  return (
    <FieldWrapper data-test={'field-date'} name={name} disabled={disabled} {...rest}>
      <DatePicker input={input} disabled={disabled} minDate={minDate} />
    </FieldWrapper>
  );
};

FieldDate.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,

  /** Minimum date able to select */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),

  /** Disable the input */
  disabled: T.bool,
};

FieldDate.defaultProps = {
  minDate: null,
  disabled: false,
};

const withReduxField = withField(isInvalidDate);
export default withReduxField(FieldDate);
