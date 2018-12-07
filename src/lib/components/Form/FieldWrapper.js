import React from 'react';
import T from 'prop-types';

// wrapper around fields to display an optional label and help block.
// Handles displaying errors if vlaidation has failed
const FieldWrapper = (props) => {
  const {
    label, meta, helpText, className, children, required,
  } = props;
  const { touched, error } = meta;

  let statusClass = '';
  let errorMessage = '';
  if (touched && error) {
    statusClass = 'has-error';
    errorMessage = error;
  }

  return (
    <div className={`form-group ${statusClass} ${className}`}>
      {label && (
        <label className="control-label">
          {required && <span className="required-label">* </span>}
          {label}
        </label>
      )}

      {children}

      {errorMessage && <small className="feedback">{errorMessage}</small>}
      {helpText && <p className="help-block">{helpText}</p>}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: T.string,
  meta: T.object.isRequired,
  helpText: T.string,
  className: T.string,
  children: T.element.isRequired,
  required: T.bool,
};

FieldWrapper.defaultProps = {
  label: '',
  helpText: '',
  className: '',
  required: false,
};

export default FieldWrapper;
