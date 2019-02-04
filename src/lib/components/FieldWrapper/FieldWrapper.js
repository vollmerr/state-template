import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// wrapper around fields to render an optional label and help block.
// Handles displaying errors if vlaidation has failed
const FieldWrapper = (props) => {
  const {
    label,
    meta,
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
        <label className="control-label" data-test={'label'}>
          {
            required
            && !disabled
            && <span className="required-label" data-test={'required'}>* </span>}
          {label}
        </label>
      )}

      {children}

      {errorMessage && <small className="feedback" data-test={'error'}>{errorMessage}</small>}
      {helpText && <p className="help-block" data-test={'help'}>{helpText}</p>}
    </div>
  );
};

FieldWrapper.propTypes = {
  /** Label to display above input */
  label: T.string,

  /** Meta information, such as errors and touched */
  meta: T.object.isRequired,

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
