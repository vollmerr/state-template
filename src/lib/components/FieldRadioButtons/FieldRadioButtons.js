import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyRadio } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField, FieldLabel } from '../Field';

import RadioButton from './RadioButton';

// /**
//  * Group of radio buttons and label that applies state-template styling
//  */
export const FieldRadioButtons = (props) => {
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
    'field__radio-buttons',
    className,
  ]);

  const wrapperProps = {
    'aria-describedby': labelId,
    'data-test': 'field__radio-buttons',
    className: cn,
    id,
    role: 'radiogroup',
    ...rest,
  };

  const radioProps = {
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
            <RadioButton
              key={option.value}
              option={option}
              {...option}
              {...radioProps}
            />
          ))
        }
      </div>
    </>
  );
};

FieldRadioButtons.propTypes = {
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

  /** Called when radio button is blurred */
  onBlur: T.func,

  /** Called when radio button changes */
  onChange: T.func,

  /** Called when radio button is focused */
  onFocus: T.func,

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** Determines if field is required */
  required: T.bool,

  /** Tooltip to render */
  tooltip: T.node,

  /** Value of the field */
  value: T.string,

  /** Use style variant */
  variant: T.oneOf([
    'highlight',
  ]),
};

FieldRadioButtons.defaultProps = {
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

export default withField(isEmptyRadio)(FieldRadioButtons);
