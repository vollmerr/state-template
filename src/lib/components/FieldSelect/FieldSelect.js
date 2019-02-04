import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyRadio } from '../../utils/validate';
import withField from '../../utils/withField';

import FieldWrapper from '../FieldWrapper';

// select with optional help text and label
// displays error if validation fails
export const FieldSelect = (props) => {
  const {
    input, options, disabled, multiple, ...rest
  } = props;

  if (multiple) {
    // expects array as default if multiple is used
    input.value = input.value || [];
  }

  const cn = classNames([
    'select',
    'field-select',
    { multiple },
  ]);

  return (
    <FieldWrapper data-test={'field-select'} disabled={disabled} {...rest}>
      <label className={cn}>
        <select {...input} multiple={multiple} disabled={disabled}>
          <option disabled hidden style={{ display: 'none' }} value={''} />
          {
            options.filter(x => !x.hidden).map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </label>
    </FieldWrapper>
  );
};

FieldSelect.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: T.object.isRequired,

  /** Options to select from */
  options: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      value: T.string.isRequired,
    }),
  ).isRequired,

  /** Disable the input */
  disabled: T.bool,

  /** Allow multiple selecting */
  multiple: T.bool,
};

FieldSelect.defaultProps = {
  disabled: false,
  multiple: false,
};

const withReduxField = withField(isEmptyRadio);
export default withReduxField(FieldSelect);
