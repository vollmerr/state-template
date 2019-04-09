import React from 'react';
import T from 'prop-types';

import { isEmptyCheck } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField } from '../Field';

import Checkbox from './Checkbox';

// group of checkboxes
export const FieldCheckboxes = (props) => {
  const {
    options,
    label,
    ...rest
  } = props;

  return (
    <div
      data-test={'field__checkboxes'}
      className={'field__checkboxes'}
      role={'group'}
      aria-label={label}
    >
      {
        options.filter(x => !x.hidden).map(option => (
          <Checkbox
            key={option.value}
            option={option}
            {...rest}
          />
        ))
      }
    </div>
  );
};

FieldCheckboxes.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'primary',
  ]),

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** aria-label for checkbox group */
  label: T.string.isRequired,
};

FieldCheckboxes.defaultProps = {
  variant: '',
};

export default withField(isEmptyCheck)(FieldCheckboxes);
