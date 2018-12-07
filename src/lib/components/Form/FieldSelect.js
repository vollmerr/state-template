import React from 'react';
import T from 'prop-types';

import { isEmptyRadio } from '../../utils/validate';
import FieldWrapper from './FieldWrapper';
import withField from './withField';

// group of radio buttons with optional help text and label
// displays error if validation fails
const FieldSelect = (props) => {
  const {
    input, options, disabled, multiple,
  } = props;

  let labelClass = 'select';
  if (multiple) {
    // expects array as default if multiple is used
    input.value = input.value || [];
    labelClass += ' multiple';
  }

  return (
    <FieldWrapper {...props}>
      <label className={labelClass}>
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
