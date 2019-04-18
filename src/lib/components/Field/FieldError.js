import React from 'react';
import T from 'prop-types';

const FieldError = ({ errorId, errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <small data-test={'error'} className={'feedback'} id={errorId}>
      {errorMessage}
    </small>
  );
};

FieldError.propTypes = {
  errorId: T.string,
  errorMessage: T.string,
};

FieldError.defaultProps = {
  errorId: null,
  errorMessage: null,
};

export default FieldError;
