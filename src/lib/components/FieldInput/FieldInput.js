import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyText } from '../../utils/validate';
import { withField } from '../Field';

// input field that applies state-template styling
export const FieldInput = (props) => {
  const {
    className,
    tag: Tag,
    ...rest
  } = props;

  const cn = classNames([
    'field__input',
    'form-control',
    className,
  ]);

  return (
    <Tag
      data-test={'field__input'}
      className={cn}
      {...rest}
    />
  );
};

FieldInput.propTypes = {
  /** Accessible indicator of related information */
  'aria-describedby': T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Class names to attach to the field */
  className: T.string,

  /** Disable the input */
  disabled: T.bool,

  /** Id of field */
  id: T.string,

  /** Label for the field */
  label: T.string.isRequired,

  /** Name of field */
  name: T.string.isRequired,

  /** Called when radio button is blurred */
  onBlur: T.func,

  /** Called when radio button changes */
  onChange: T.func,

  /** Called when radio button is focused */
  onFocus: T.func,

  /** HTML tag to render as */
  tag: T.node,

  /** Value of the field */
  value: T.string,
};

FieldInput.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  tag: 'input',
  value: null,
};

export default withField(isEmptyText)(FieldInput);
