import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

// HOC that attaches a label, error message,
// help block, and attaches props such as aria labels
// Targeted use at redux form
export const withFieldWrapper = (Component) => {
  const WrappedField = (props) => {
    const {
      meta,
      input,
      label,
      helpText,
      required,
      disabled,
      className,
      ...rest
    } = props;

    const { touched, error } = meta;
    const { name } = input;
    const errorId = `${name}--error`;
    const helpId = `${name}--help`;

    let errorMessage = '';
    if (touched && error) {
      errorMessage = error;
    }

    const cn = classNames([
      'form-group',
      className,
      { disabled },
      { 'has-error': errorMessage },
    ]);

    let ariaDescBy;
    let ariaInvalid = 'false';
    if (errorMessage || helpText) {
      ariaDescBy = '';

      if (errorMessage) {
        ariaDescBy += errorId;
        ariaInvalid = 'true';
      }

      if (helpText) {
        ariaDescBy += helpId;
      }
    }

    const fieldProps = {
      label,
      disabled,
      'aria-invalid': ariaInvalid,
      'aria-describedby': ariaDescBy,
    };

    return (
      <div className={cn}>
        {label && (
          <label data-test={'label'} className={'control-label'} htmlFor={name}>
            {
              required
              && !disabled
              && <span data-test={'required'} className={'required-label'} aria-hidden>* </span>
            }

            {label}
          </label>
        )}

        <Component id={name} {...fieldProps} {...input} {...rest} />

        {errorMessage && (
          <small data-test={'error'} className={'feedback'} id={errorId}>
            {errorMessage}
          </small>
        )}

        {helpText && (
          <p data-test={'help'} className={'help-block'} id={helpId}>
            {helpText}
          </p>
        )}
      </div>
    );
  };

  WrappedField.propTypes = {
    /** Meta information from redux-form's Field, such as errors and touched */
    meta: T.object.isRequired,

    /** Input from redux-form's Field, attaches name, value, etc  */
    input: T.object.isRequired,

    /** Label to display above input */
    label: T.string,

    /** Help text to render under input */
    helpText: T.string,

    /** The field should use the default required validation */
    required: T.bool,

    /** Disable the input */
    disabled: T.bool,

    /** Style class name to attach to button */
    className: T.string,
  };

  WrappedField.defaultProps = {
    label: '',
    helpText: '',
    className: '',
    required: false,
    disabled: false,
  };

  return WrappedField;
};

export default withFieldWrapper;
