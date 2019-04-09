import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyRadio } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField } from '../Field';

// select with optional help text and label
// displays error if validation fails
export const FieldSelect = (props) => {
  const {
    className,
    multiple,
    options,
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
    <div data-test={'field__select'} className={cn}>
      <select multiple={multiple} value={mappedValue} {...rest}>
        <option disabled hidden style={{ display: 'none' }} value={''} />
        {
          options.filter(x => !x.hidden).map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </select>
    </div>
  );
};

FieldSelect.propTypes = {
  /** Accessible indicator of related information */
  'aria-describedby': T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Class names to attach to the field wrapper */
  className: T.string,

  /** Disable the input */
  disabled: T.bool,

  /** Id of field */
  id: T.string,

  /** aria-label for the field */
  label: T.string.isRequired,

  /** Allow multiple selecting */
  multiple: T.bool,

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

  /** Value of option */
  value: T.any,
};

FieldSelect.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  multiple: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  value: null,
};

export default withField(isEmptyRadio)(FieldSelect);
