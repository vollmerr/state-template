import React from 'react';
import T from 'prop-types';

/**
 * Label to render above field. Actual <label> element is inside the file picker,
 * used to interact with the input...
 */
const FieldFileLabel = ({ label, required }) => {
  if (!label) {
    return null;
  }

  return (
    <div data-test={'label'} className={'field__file-label'}>
      {
        required
        && <span data-test={'required'} className={'required-label'} aria-hidden>* </span>
      }

      {label}
    </div>
  );
};

FieldFileLabel.propTypes = {
  label: T.string,
  required: T.bool,
};

FieldFileLabel.defaultProps = {
  label: null,
  required: false,
};

export default FieldFileLabel;
