import React from 'react';

import FieldWrapper from './FieldWrapper';
import withField from './withField';

// input field that applies state-template styling
const FieldInput = (props) => {
  const { input, type, disabled } = props;
  const { name } = input;
  const Control = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FieldWrapper {...props}>
      <Control type={type || 'text'} className="form-control" id={name} disabled={disabled} {...input} />
    </FieldWrapper>
  );
};

export default withField(FieldInput);
