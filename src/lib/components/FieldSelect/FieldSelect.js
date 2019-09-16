import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyRadio } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField, FieldLabel } from '../Field';

/**
 * Select field and label that applies state-template styling
 *
 * Extends [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) properties (id, data-*, etc)
 */
export const FieldSelect = (props) => {
  const {
    className,
    inputRef,
    label,
    multiple,
    name,
    options,
    required,
    tooltip,
    value,
    ...rest
  } = props;

  // expects array as default if multiple is used
  const mappedValue = multiple && !value ? [] : value;
  const cn = classNames([
    'select',
    'field__select',
    { multiple },
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

      <div data-test={'field__select'} className={cn}>
        <select
          multiple={multiple}
          value={mappedValue}
          className={'form-control'}
          ref={inputRef}
          {...rest}
        >
          <option disabled hidden value={''}>{null}</option>
          {
            options.filter((x) => !x.hidden).map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
    </>
  );
};

FieldSelect.propTypes = {
  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Class names to attach to the field wrapper */
  className: T.string,

  /** Ref to attach to input */
  inputRef: T.shape({
    current: T.object,
  }),

  /** Label for the field */
  label: T.string.isRequired,

  /** Allow multiple selecting */
  multiple: T.bool,

  /** Name of field */
  name: T.string.isRequired,

  /** Determines if field is required */
  required: T.bool,

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** Tooltip to render */
  tooltip: T.node,

  /** Value of option */
  value: T.oneOfType([T.string, T.bool, T.number]),
};

FieldSelect.defaultProps = {
  'aria-invalid': 'false',
  className: null,
  inputRef: null,
  required: false,
  multiple: false,
  tooltip: null,
  value: null,
};

export default withField(isEmptyRadio)(FieldSelect);
