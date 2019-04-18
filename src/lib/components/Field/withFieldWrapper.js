import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import FieldHelp from './FieldHelp';

// HOC that attaches a label, error message,
// help block, and attaches props such as aria labels
// Targeted use at redux form
export const withFieldWrapper = (Component, options = {}) => {
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

    const {
      renderLabel,
      renderError,
      renderHelp,
    } = options;

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

    const labelProps = {
      label,
      name,
      required,
    };

    const errorProps = {
      errorId,
      errorMessage,
    };

    const helpProps = {
      errorId,
      helpText,
    };

    return (
      <div className={cn}>
        {label && (
          renderLabel
            ? renderLabel(labelProps)
            : <FieldLabel {...labelProps} />
        )}

        <Component id={name} {...fieldProps} {...input} {...rest} />

        {errorMessage && (
          renderError
            ? renderError(errorProps)
            : <FieldError {...errorProps} />
        )}

        {helpText && (
          renderHelp
            ? renderHelp(helpProps)
            : <FieldHelp {...helpProps} />
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
