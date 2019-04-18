import React from 'react';
import T from 'prop-types';

const FieldLabel = ({ label, name, required }) => {
  if (!label) {
    return null;
  }

  return (
    <label data-test={'label'} className={'control-label'} htmlFor={name}>
      {
        required
        && <span data-test={'required'} className={'required-label'} aria-hidden>* </span>
      }

      {label}
    </label>
  );
};

FieldLabel.propTypes = {
  label: T.string,
  name: T.string.isRequired,
  required: T.bool,
};

FieldLabel.defaultProps = {
  label: null,
  required: false,
};

export default FieldLabel;
