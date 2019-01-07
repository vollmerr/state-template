import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// individual radio button, applies state-template styling
const RadioButton = ({
  input,
  value,
  label,
  variant,
  disabled,
  className,
  inline,
}) => {
  const checked = input.value.toString().indexOf(value) !== -1;
  const onChange = () => input.onChange(value);
  const inputProps = {
    disabled,
    checked,
    onChange,
    type: 'radio',
    name: input.name,
  };

  let cn = classNames([
    'check',
    className,
  ]);

  if (variant) {
    return (
      <label className={cn}>
        <input className={'hidden-up pos-abs top-0 left-0'} {...inputProps} />
        <span className={`btn btn-lg btn-block bg-${variant}--checked rounded-0`}>
          <div>{label}</div>
        </span>
      </label>
    );
  }

  cn = classNames([
    'p-l-md m-l-0 m-r-md',
    className,
    inline ? 'form-check-inline' : 'form-check',
  ]);

  return (
    <label className={cn}>
      <input className={'hidden-up pos-abs'} {...inputProps} />
      <div className={'check-icon-radio'}>
        <i />
      </div>
      <div>{label}</div>
    </label>
  );
};

RadioButton.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'highlight',
  ]),
  /** Input from redux-form's Field, attaches name, value, etc */
  input: T.object.isRequired,
  /** Label of radio button */
  label: T.string.isRequired,
  /** Value of radio button */
  value: T.string.isRequired,
  /** Disable the input */
  disabled: T.bool,
  /** Class name to attach to top level label */
  className: T.string,
  /** Display inline */
  inline: T.bool,
};

RadioButton.defaultProps = {
  variant: '',
  disabled: false,
  className: '',
  inline: false,
};

export default RadioButton;
