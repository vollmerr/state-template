import React from 'react';

const ErrorMessage = ({ error, onClick }) => (
  <div className={'row'}>
    <div className={'col col-xs-12 text-center'}>
      <h2>Sorry, something went wrong!</h2>
      <p>{error}</p>
      {onClick && <button type={'button'} className={'btn btn-primary'} onClick={onClick}>Retry</button>}
    </div>
  </div>
);

export default ErrorMessage;
