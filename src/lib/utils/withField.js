import React from 'react';
import { Field } from 'redux-form';

// HOC wrapper around redux-form's Field to alter props
// before they get to the compoonent
const withField = emptyValidator => component => (props) => {
  const { disabled, required, validate = [] } = props;

  let toValidate;
  // only validate fields that are not disabled
  if (!disabled) {
    // attach the validation for required based off input type
    if (required) {
      toValidate = [...validate, emptyValidator];
    } else {
      toValidate = validate;
    }
  }

  const fieldProps = {
    ...props,
    component,
    validate: toValidate,
  };

  return <Field {...fieldProps} />;
};

export default withField;
