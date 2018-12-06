import React from 'react';
import { Field } from 'redux-form';

// HOC wrapper around redux-form's Field to alter props
// before they get to the compoonent
const withField = emptyValidator => component => (props) => {
  const { disabled, required, validate = [] } = props;
  // attach the validation for required based off input type
  if (required) {
    validate.push(emptyValidator);
  }
  // do not validate disabled fields
  const fixedValidate = !disabled ? validate : [];

  const fixedProps = {
    ...props,
    component,
    validate: fixedValidate,
  };

  return <Field {...fixedProps} />;
};

export default withField;
