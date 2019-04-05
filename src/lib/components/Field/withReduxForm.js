import React from 'react';
import { Field } from 'redux-form';

// HOC wrapper around redux-form's Field to alter props
// before they get to the component
const withReduxForm = emptyValidator => component => (props) => {
  const { disabled, required, validate = [] } = props;

  let toValidate;
  let isRequired;
  // only validate fields that are not disabled
  if (!disabled) {
    // attach the validation for required based off input type
    if (required) {
      isRequired = true;
      toValidate = [...validate, emptyValidator];
    } else {
      toValidate = validate;
    }
  }

  const fieldProps = {
    ...props,
    component,
    required: isRequired,
    validate: toValidate,
  };

  return <Field {...fieldProps} />;
};

export default withReduxForm;
