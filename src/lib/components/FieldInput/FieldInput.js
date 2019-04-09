import React from 'react';
import T from 'prop-types';

import { isEmptyText } from '../../utils/validate';
import { withField } from '../Field';

// input field that applies state-template styling
export const FieldInput = (props) => {
  const {
    tag: Tag,
    ...rest
  } = props;

  return (
    <Tag
      data-test={'field__input'}
      className={'form-control field__input'}
      {...rest}
    />
  );
};

FieldInput.propTypes = {
  /** HTML tag to render as */
  tag: T.node,
};

FieldInput.defaultProps = {
  tag: 'input',
};

export default withField(isEmptyText)(FieldInput);
