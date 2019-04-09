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
    value,
    options,
    multiple,
    ...rest
  } = props;

  // expects array as default if multiple is used
  const mappedValue = multiple && !value ? [] : value;
  const cn = classNames([
    'select',
    'field__select',
    { multiple },
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
  /** Value of option */
  value: T.any,

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** Allow multiple selecting */
  multiple: T.bool,
};

FieldSelect.defaultProps = {
  value: null,
  multiple: false,
};

export default withField(isEmptyRadio)(FieldSelect);
