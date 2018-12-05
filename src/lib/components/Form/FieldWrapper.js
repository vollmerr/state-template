import React from 'react';

// wrapper around fields to display an optional label and help block.
// Handles displaying errors if vlaidation has failed
const FieldWrapper = (props) => {
  const {
    label, meta, helpText, className, children,
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
      {label && <label className="control-label">{label}</label>}

      {children}

      {errorMessage && <small className="feedback">{errorMessage}</small>}
      {helpText && <p className="help-block">{helpText}</p>}
    </div>
  );
};

export default FieldWrapper;
