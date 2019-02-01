import React from 'react';
import T from 'prop-types';

const ErrorMessage = ({ error }) => (
  <div className={'error-message'}>
    <div className={'text-center'}>
      <h2>Sorry, something went wrong!</h2>
      <p>{error && error.toString()}</p>
    </div>
  </div>
);

ErrorMessage.propTypes = {
  /** Error to render */
  error: T.string,
};

ErrorMessage.defaultProps = {
  error: null,
};

export default ErrorMessage;
