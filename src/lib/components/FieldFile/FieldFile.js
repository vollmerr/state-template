import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyFile } from '../../utils/validate';
import { withField } from '../Field';

import FieldFileLabel from './FieldFileLabel';

// file attachment field that applies state-template styling
export class FieldFile extends React.PureComponent {
  inputRef = React.createRef()

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    // handle resetting the form
    if (!value) {
      this.inputRef.current.value = '';
    }
  }

  eventHandler = func => () => {
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
      name,
      className,
      value, // will be passed as `files`, do not pass value
      onChange,
      onBlur,
      onFocus,
      btnText,
      label,
      ...rest
    } = this.props;

    const cn = classNames([
      'field__file',
      className,
    ]);

    return (
      <div data-test={'field__file'} className={cn}>
        <input
          type={'file'}
          onChange={this.eventHandler(onChange)}
          onBlur={this.eventHandler(onBlur)}
          onFocus={this.eventHandler(onFocus)}
          files={value}
          ref={this.inputRef}
          {...rest}
        />

        <label className={'form-control field__file-text'} htmlFor={name}>
          {this.getFileText()}
        </label>

        <div className={'field__file-button'}>
          {btnText}
        </div>
      </div>
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

  /** Value of the field */
  value: T.any,
};

FieldFile.defaultProps = {
  accept: null,
  'aria-describedby': null,
  'aria-invalid': 'false',
  btnText: 'Choose File',
  capture: null,
  className: null,
  disabled: false,
  id: null,
  multiple: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  value: null,
};

const options = {
  renderLabel: FieldFileLabel,
};

export default withField(isEmptyFile)(FieldFile, options);
