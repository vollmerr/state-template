import React from 'react';
import T from 'prop-types';

const FieldHelp = ({ helpId, helpText }) => {
  if (!helpText) {
    return null;
  }

  return (
    <p data-test={'help'} className={'help-block'} id={helpId}>
      {helpText}
    </p>
  );
};

FieldHelp.propTypes = {
  helpId: T.string,
  helpText: T.string,
};

FieldHelp.defaultProps = {
  helpId: null,
  helpText: null,
};

export default FieldHelp;
