import React from 'react';
import T from 'prop-types';

import { isEmptyText } from '../../utils/validate';
import withField from '../../utils/withField';

import FieldWrapper from '../FieldWrapper';

// input field that applies state-template styling
export const FieldInput = (props) => {
  const {
    input,
    type,
    disabled,
    tag: Tag,
    autoComplete,
    ...rest
  } = props;
  const { name } = input;

  return (
    <FieldWrapper data-test={'field-input'} name={name} disabled={disabled} {...rest}>
      <Tag
        id={name}
        type={type}
        className="form-control field-input"
        disabled={disabled}
        autoComplete={autoComplete}
        {...input}
      />
    </FieldWrapper>
  );
};

FieldInput.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc  */
  input: T.object.isRequired,

  /** Input type to use */
  type: T.string,

  /** Disable the input */
  disabled: T.bool,

  /** HTML tag to render as */
  tag: T.node,

  /** HTML auto complete */
  autoComplete: T.oneOf(['on', 'off']),
};

FieldInput.defaultProps = {
  type: 'text',
  disabled: false,
  tag: 'input',
  autoComplete: 'on',
};

const withReduxField = withField(isEmptyText);
export default withReduxField(FieldInput);
