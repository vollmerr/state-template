import React from 'react';

import FieldWrapper from './FieldWrapper';
import withField from './withField';

// individual radio button, applies state-template styling
const RadioButton = ({
  input, value, label, styleType,
}) => {
  const checked = input.value.toString().indexOf(value) !== -1;
  const onChange = () => input.onChange(value);

  if (styleType === 'button') {
    return (
      <label className={'check'}>
        <input className={'hidden-up pos-abs top-0 left-0'} name={input.name} checked={checked} onChange={onChange} type={'radio'} />
        <span className={'btn btn-lg btn-block bg-highlight--checked rounded-0'}>{label}</span>
      </label>
    );
  }

  return (
    <label className={'form-check-inline p-l-md m-l-0 m-r-md'}>
      <input className={'hidden-up pos-abs'} name={input.name} checked={checked} onChange={onChange} type={'radio'} />
      <div className={'check-icon-radio'}>
        <i />
      </div>
      {label}
    </label>
  );
};

// group of radio buttons with optional help text and label
// displays error if validation fails
const FieldRadioButtons = (props) => {
  const { input, options, styleType } = props;

  return (
    <FieldWrapper {...props}>
      <div>
        {
          options.filter(x => !x.hidden).map(option => (
            <RadioButton
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

export default withField(FieldRadioButtons);
