import React from 'react';
import T from 'prop-types';

import { isEmptyTime } from '../../../utils/validate';

import FieldWrapper from '../FieldWrapper';
import withField from '../withField';
import TimePicker from './TimePicker';

// Date picker for redux-form using pikaday library
const FieldTime = (props) => {
  const { input, disabled, ...rest } = props;

  return (
    <FieldWrapper data-test={'field-time'} disabled={disabled} {...rest}>
      <TimePicker input={input} disabled={disabled} />
    </FieldWrapper>
  );
};

FieldTime.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,
  /** Disable the input */
  disabled: T.bool,
};

FieldTime.defaultProps = {
  disabled: false,
};

const withReduxField = withField(isEmptyTime);
export default withReduxField(FieldTime);
