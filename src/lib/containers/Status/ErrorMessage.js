import React from 'react';

import Button from '../../components/Button';

const ErrorMessage = ({ error, btnProps }) => (
  <div className={'row'}>
    <div className={'col col-xs-12 text-center'}>
      <h2>Sorry, something went wrong!</h2>
      <p>{error}</p>
      {btnProps && <Button {...btnProps} />}
    </div>
  </div>
);

export default ErrorMessage;
