import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// wrapper around fields to render an optional label and help block.
// Handles displaying errors if vlaidation has failed
const FieldWrapper = (props) => {
  const {
    label,
    meta,
    name,
    helpText,
    className,
    children,
    required,
    disabled,
    ...rest
  } = props;

  const { touched, error } = meta;

  let errorMessage = '';
  if (touched && error) {
    errorMessage = error;
  }

  const cn = classNames([
    'form-group',
    className,
    { 'has-error': errorMessage },
    { disabled },
  ]);

  return (
    <div className={cn} {...rest}>
      {label && (
        <label data-test={'label'} className={'control-label'} htmlFor={name}>
          {
            required
            && !disabled
            && <span data-test={'required'} className={'required-label'}>* </span>}
          {label}
        </label>
      )}

      {children}

      {errorMessage && <small data-test={'error'} className={'feedback'}>{errorMessage}</small>}
      {helpText && <p data-test={'help'} className={'help-block'}>{helpText}</p>}
    </div>
  );
};

FieldWrapper.propTypes = {
  /** Label to display above input */
  label: T.string,

  /** Meta information, such as errors and touched */
  meta: T.object.isRequired,

  /** Name of field */
  name: T.string.isRequired,

  /** Help text to render under input */
  helpText: T.string,

  /** Style class name to attach to button */
  className: T.string,

  /** Content to render */
  children: T.element.isRequired,

  /** The field should use the default required validation */
  required: T.bool,

  /** Disable the input */
  disabled: T.bool,
};

FieldWrapper.defaultProps = {
  label: '',
  helpText: '',
  className: '',
  required: false,
  disabled: false,
};

export default FieldWrapper;
