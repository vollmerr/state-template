import React from 'react';
import T from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import classNames from 'classnames';

import FieldError from './FieldError';
import FieldHelp from './FieldHelp';

// HOC that attaches a label, error message,
// help block, and attaches props such as aria labels
// Targeted use at redux form
export const withFieldWrapper = (Component, options = {}) => {
  const WrappedField = (props) => {
    const {
      className,
      disabled,
      errorId: errorIdProp,
      helpId: helpIdProp,
      helpText,
      input,
      label,
      meta,
      required,
      tooltip,
      ...rest
    } = props;

    const {
      renderError,
      renderHelp,
    } = options;

    const { touched, error } = meta;
    const { name } = input;
    const errorId = errorIdProp || `${name}--error`;
    const helpId = helpIdProp || `${name}--help`;

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
      'aria-describedby': ariaDescBy,
      'aria-invalid': ariaInvalid,
      disabled,
      label,
      required,
      tooltip,
      ...input,
      ...rest,
    };

    const errorProps = {
      errorId,
      errorMessage,
    };

    const helpProps = {
      helpId,
      helpText,
    };

    return (
      <div className={cn}>
        <Component id={name} {...fieldProps} />

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
    /** Style class name to attach to button */
    className: T.string,

    /** Disable the input */
    disabled: T.bool,

    /** Custom id to use for error message */
    errorId: T.string,

    /** Help text to render under input */
    helpText: T.string,

    /** Custom id to use for help block */
    helpId: T.string,

    /** Input from redux-form's Field, attaches name, value, etc  */
    input: T.shape(fieldInputPropTypes).isRequired,

    /** Label to display above input */
    label: T.string,

    /** Meta information from redux-form's Field, such as errors and touched */
    meta: T.shape(fieldMetaPropTypes).isRequired,

    /** The field should use the default required validation */
    required: T.bool,

    /** Tooltip to display */
    tooltip: T.oneOfType([
      T.string,
      T.node,
    ]),
  };

  WrappedField.defaultProps = {
    className: '',
    disabled: false,
    errorId: null,
    helpText: '',
    helpId: null,
    label: '',
    required: false,
    tooltip: null,
  };

  return WrappedField;
};

export default withFieldWrapper;
