import withFieldWrapper from './withFieldWrapper';
import withReduxField from './withReduxForm';

// HOC for mapping a component to redux form format
// then passing to redux forms Field component
const withField = emptyValidator => (component) => {
  // attach aria attribute, error message, label, etc
  const WrappedField = withFieldWrapper(component);
  // map to redux form's Field
  return withReduxField(emptyValidator)(WrappedField);
};

export default withField;
