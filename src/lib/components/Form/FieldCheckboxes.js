import React from 'react';
import T from 'prop-types';

import FieldWrapper from './FieldWrapper';
import withField from './withField';

// individual checkbox, applies state-template styling
const Checkbox = ({
  input, value, label, styleType, // eslint-disable-line react/prop-types
}) => {
  const checked = input.value.toString().indexOf(value) !== -1;
  const onChange = (event) => {
    const newValue = [...input.value];
    if (newValue[0] === '') {
      newValue.shift();
    }
    if (event.target.checked) {
      newValue.push(value);
    } else {
      newValue.splice(newValue.indexOf(value), 1);
    }
    return input.onChange(newValue);
  };

  if (styleType === 'button') {
    return (
      <label className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} name={input.name} checked={checked} onChange={onChange} type={'checkbox'} />
        <span className={'btn btn-md btn-block color-white--checked bg-primary--checked rounded-0'}>{label}</span>
      </label>
    );
  }

  return (
    <label className={'form-check-inline p-l-md m-l-0 m-r-md'}>
      <input className={'hidden-up pos-abs'} name={input.name} checked={checked} onChange={onChange} type={'checkbox'} />
      <div className={'check-icon-checkbox'}>
        <i className={'ca-gov-icon-check-mark'} />
      </div>
      {label}
    </label>
  );
};

// group of checkboxes with optional help text and label
// displays error if validation fails
export const FieldCheckboxes = (props) => {
  const { input, options, styleType } = props;

  return (
    <FieldWrapper {...props}>
      <div>
        {
          options.filter(x => !x.hidden).map(option => (
            <Checkbox
              input={input}
              key={option.value}
              styleType={styleType}
              {...option}
            />
          ))
        }
      </div>
    </FieldWrapper>
  );
};

FieldCheckboxes.propTypes = {
  /** Input from redux-form's Field, attaches name, value, etc */
  input: T.object.isRequired,
  /** Options to select from */
  options: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      value: T.string.isRequired,
    }),
  ).isRequired,
  /** Style to display in */
  styleType: T.oneOf(['default', 'button']),
};

FieldCheckboxes.defaultProps = {
  styleType: 'default',
};

export default withField(FieldCheckboxes);
