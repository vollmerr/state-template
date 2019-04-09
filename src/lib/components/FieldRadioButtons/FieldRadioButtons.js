import React from 'react';
import T from 'prop-types';

import { isEmptyRadio } from '../../utils/validate';
import * as propUtils from '../../utils/propTypes';
import { withField } from '../Field';

import RadioButton from './RadioButton';

// group of radio buttons
export const FieldRadioButtons = (props) => {
  const {
    options,
    label,
    ...rest
  } = props;

  return (
    <div
      data-test={'field__radio-buttons'}
      className={'field__radio-buttons'}
      role={'group'}
      aria-label={label}
    >
      {
        options.filter(x => !x.hidden).map(option => (
          <RadioButton
            key={option.value}
            option={option}
            {...rest}
          />
        ))
      }
    </div>
  );
};

FieldRadioButtons.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'highlight',
  ]),

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** aria-label for radio button group */
  label: T.string.isRequired,
};

FieldRadioButtons.defaultProps = {
  variant: '',
};

export default withField(isEmptyRadio)(FieldRadioButtons);
