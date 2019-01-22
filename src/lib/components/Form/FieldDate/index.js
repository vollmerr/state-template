import React from 'react';
import T from 'prop-types';

import { isInvalidDate } from '../../../utils/validate';

import FieldWrapper from '../FieldWrapper';
import withField from '../withField';
import DatePicker from './DatePicker';

// Date picker for redux-form using pikaday library
export const FieldDate = (props) => {
  const {
    input, disabled, minDate, ...rest
  } = props;

  return (
    <FieldWrapper data-test={'field-date'} disabled={disabled} {...rest}>
      <DatePicker input={input} disabled={disabled} minDate={minDate} />
    </FieldWrapper>
  );
};

FieldDate.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,
  /** Disable the input */
  disabled: T.bool,
  /** Minimum date able to select */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),
};

FieldDate.defaultProps = {
  disabled: false,
  minDate: null,
};

const withReduxField = withField(isInvalidDate);
export default withReduxField(FieldDate);
