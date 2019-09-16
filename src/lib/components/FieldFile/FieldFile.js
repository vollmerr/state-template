import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyFile } from '../../utils/validate';
import { withField, FieldLabel } from '../Field';

/**
 * File attachment field and label that applies state-template styling
 *
 * Extends [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) properties (id, data-*, etc)
 */
export class FieldFile extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.inputRef = props.inputRef || React.createRef();
  }

  componentDidUpdate() {
    const { value } = this.props;
    // handle resetting the form
    if (!value) {
      this.inputRef.current.value = '';
    }
  }

  eventHandler = (func) => () => {
    const { multiple } = this.props;
    const { files } = this.inputRef.current;
    const value = multiple ? files : files[0];
    return func(value || null);
  }

  getFileText = () => {
    const { placeholder } = this.props;
    const { current } = this.inputRef;

    if (current) {
      const { files } = current;
      // multiple files
      if (files && files.length > 1) {
        return `${files.length} files`;
      }
      // single file
      if (files[0]) {
        return files[0].name;
      }
    }
    // no file
    return placeholder || 'No File Selected';
  }

  render() {
    const {
      'aria-describedby': ariaDescribedBy,
      btnText,
      className,
      inputRef,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      required,
      tooltip,
      value, // will be passed as `files`, do not pass value
      ...rest
    } = this.props;

    const cn = classNames([
      'field__file',
      className,
    ]);

    const fileNameId = `${name}--filename`;
    const fileNameText = this.getFileText();
    const describedBy = ariaDescribedBy ? `${ariaDescribedBy} ${fileNameId}` : fileNameId;

    return (
      <>
        <FieldLabel
          label={label}
          name={name}
          required={required}
          tooltip={tooltip}
          tag={'div'}
        />

        <div data-test={'field__file'} className={cn}>
          <input
            aria-describedby={describedBy}
            aria-label={label}
            type={'file'}
            onChange={this.eventHandler(onChange)}
            onBlur={this.eventHandler(onBlur)}
            onFocus={this.eventHandler(onFocus)}
            files={value}
            ref={this.inputRef}
            {...rest}
          />

          {/* file name for display - hide from screen readers */}
          <label className={'form-control field__file-text'} htmlFor={name} aria-hidden>
            {fileNameText}
          </label>

          {/* file name for screen readers - hide from vision */}
          <span id={fileNameId} hidden>{fileNameText}</span>

          <div className={'field__file-button'}>
            {btnText}
          </div>
        </div>
      </>
    );
  }
}

FieldFile.propTypes = {
  /** One or more unique file type specifiers describing file types to allow */
  accept: T.string,

  /** Accessible indicator of related information */
  'aria-describedby': T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Text for upload button */
  btnText: T.oneOfType([
    T.string,
    T.node,
  ]),

  /** What source to use for capturing image or video data */
  capture: T.string,

  /** Class names to attach to the field */
  className: T.string,

  /** Disable the input */
  disabled: T.bool,

  /** Id of field */
  id: T.string,

  /** Ref to attach to input */
  inputRef: T.shape({
    current: T.object,
  }),

  /** aria-label for the field */
  label: T.string.isRequired,

  /** indicates that the user may choose more than one file */
  multiple: T.bool,

  /** Name of field */
  name: T.string.isRequired,

  /** Called when radio button is blurred */
  onBlur: T.func,

  /** Called when radio button changes */
  onChange: T.func,

  /** Called when radio button is focused */
  onFocus: T.func,

  /** Displayed when no file is selected */
  placeholder: T.string,

  /** Determines if field is required */
  required: T.bool,

  /** Tooltip to render */
  tooltip: T.node,

  /** Value of the field */
  value: T.any, // eslint-disable-line react/forbid-prop-types
};

FieldFile.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  accept: null,
  btnText: 'Choose File',
  capture: null,
  className: null,
  disabled: false,
  id: null,
  inputRef: null,
  multiple: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  required: false,
  tooltip: null,
  value: null,
};

export default withField(isEmptyFile)(FieldFile);
