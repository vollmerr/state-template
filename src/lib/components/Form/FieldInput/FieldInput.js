import React from 'react';
import T from 'prop-types';

import { isEmptyText } from '../../../utils/validate';

import FieldWrapper from '../FieldWrapper';
import withField from '../withField';

// input field that applies state-template styling
export const FieldInput = (props) => {
  const {
    input, type, disabled, tag: Tag, ...rest
  } = props;
  const { name } = input;

  return (
    <FieldWrapper data-test={'field-input'} disabled={disabled} {...rest}>
      <Tag
        id={name}
        type={type}
        className="form-control field-input"
        disabled={disabled}
        {...input}
      />
    </FieldWrapper>
  );
};

FieldInput.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,
  /** HTML tag to render as */
  tag: T.oneOfType([T.func, T.string]),
  /** type to use */
  type: T.string,
  /** Disable the input */
  disabled: T.bool,
};

FieldInput.defaultProps = {
  tag: 'input',
  type: 'text',
  disabled: false,
};

const withReduxField = withField(isEmptyText);
export default withReduxField(FieldInput);
