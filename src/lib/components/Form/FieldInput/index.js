import React from 'react';
import T from 'prop-types';

import { isEmptyText } from '../../../utils/validate';

import FieldWrapper from '../FieldWrapper';
import withField from '../withField';

// input field that applies state-template styling
const FieldInput = (props) => {
  const { input, type, disabled } = props;
  const { name } = input;
  const Control = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FieldWrapper {...props}>
      <Control type={type} className="form-control" id={name} disabled={disabled} {...input} />
    </FieldWrapper>
  );
};

FieldInput.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,
  /** Type of input */
  type: T.oneOf(['text', 'textarea']),
  /** Disable the input */
  disabled: T.bool,
};

FieldInput.defaultProps = {
  type: 'text',
  disabled: false,
};

const withReduxField = withField(isEmptyText);
export default withReduxField(FieldInput);
