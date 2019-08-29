import React from 'react';
import T from 'prop-types';
import { reduxForm } from 'redux-form';

/**
 * A redux-form connected form. All Fields must be wrapped in redux-form, it
 * is recommended to use this for doing so.
 *
 * See redux-form's `reduxForm` documentation for full available props
 */
export const Form = ({
  children,
  handleSubmit,
  onSubmit,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    {children}
  </form>
);

Form.propTypes = {
  /* form to render */
  children: T.node.isRequired,

  /* submit the form values with validation, provided by redux-form */
  handleSubmit: T.func.isRequired,

  /* called when submitting the form */
  onSubmit: T.func.isRequired,
};

const withReduxForm = reduxForm()(Form);

export default withReduxForm;
