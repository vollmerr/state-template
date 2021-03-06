import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyCheck } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField, FieldLabel } from '../Field';

import Checkbox from './Checkbox';

/**
 * Group of checkboxes and label that applies state-template styling
 */
export const FieldCheckboxes = (props) => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    className,
    disabled,
    id,
    inline,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    options,
    required,
    tooltip,
    value,
    variant,
    ...rest
  } = props;

  const labelId = `${id}--label`;

  const cn = classNames([
    'field__checkboxes',
    className,
  ]);

  const wrapperProps = {
    'aria-describedby': labelId,
    'data-test': 'field__checkboxes',
    className: cn,
    id,
    role: 'group',
    ...rest,
  };

  const checkProps = {
    'aria-describedby': ariaDescribedby,
    'aria-invalid': ariaInvalid,
    disabled,
    inline,
    name,
    onBlur,
    onChange,
    onFocus,
    value,
    variant,
  };

  return (
    <>
      <FieldLabel
        label={label}
        name={name}
        required={required}
        tooltip={tooltip}
        tag={'div'}
        id={labelId}
      />

      <div {...wrapperProps}>
        {
          options.filter((x) => !x.hidden).map((option) => (
            <Checkbox
              key={option.value}
              option={option}
              {...option}
              {...checkProps}
            />
          ))
        }
      </div>
    </>
  );
};

FieldCheckboxes.propTypes = {
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

  /** Display inline */
  inline: T.bool,

  /** aria-label for the field */
  label: T.string.isRequired,

  /** Name of field */
  name: T.string.isRequired,

  /** Called when a checkbox is blurred */
  onBlur: T.func,

  /** Called when a checkbox changes */
  onChange: T.func,

  /** Called when a checkbox is is focused */
  onFocus: T.func,

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** Determines if field is required */
  required: T.bool,

  /** Tooltip to render */
  tooltip: T.node,

  /** Value of the field */
  value: T.oneOfType([T.string, T.array]),

  /** Use style variant */
  variant: T.oneOf([
    'primary',
  ]),
};

FieldCheckboxes.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  inline: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  required: false,
  tooltip: null,
  value: null,
  variant: null,
};

export default withField(isEmptyCheck)(FieldCheckboxes);
