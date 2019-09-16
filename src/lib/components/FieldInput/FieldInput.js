import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyText } from '../../utils/validate';
import { withField, FieldLabel } from '../Field';

// /**
//  * Input field and label that applies state-template styling
//  *
//  * Extends [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) properties (id, data-*, etc)
//  */
export const FieldInput = (props) => {
  const {
    className,
    inputRef,
    label,
    name,
    required,
    tag: Tag,
    tooltip,
    ...rest
  } = props;

  const cn = classNames([
    'field__input',
    'form-control',
    className,
  ]);

  return (
    <>
      <FieldLabel
        htmlFor={name}
        label={label}
        name={name}
        required={required}
        tooltip={tooltip}
      />

      <Tag
        className={cn}
        data-test={'field__input'}
        name={name}
        ref={inputRef}
        {...rest}
      />
    </>
  );
};

FieldInput.propTypes = {
  /** Class names to attach to the field */
  className: T.string,

  /** Ref to attach to input */
  inputRef: T.shape({
    current: T.object,
  }),

  /** Label for the field */
  label: T.string.isRequired,

  /** Name of field */
  name: T.string.isRequired,

  /** Determines if field is required */
  required: T.bool,

  /** HTML tag to render as */
  tag: T.node,

  /** Tooltip to render */
  tooltip: T.node,
};

FieldInput.defaultProps = {
  className: null,
  inputRef: null,
  required: false,
  tag: 'input',
  tooltip: null,
};

export default withField(isEmptyText)(FieldInput);
