import React from 'react';
import T from 'prop-types';
import Pikaday from 'pikaday';
import classNames from 'classnames';

import { isInvalidDate } from '../../utils/validate';
import { isValid } from '../../utils/date';
import { withField } from '../Field';
import Icon from '../Icon';

// Date picker for redux-form using pikaday library
export class FieldDate extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayText: '',
    };
    this.pickerRef = React.createRef();
    this.displayRef = React.createRef();
    this.picker = null;
  }

  componentDidMount() {
    this.initPikaday();
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (value !== nextProps.value) {
      // update displayed text when value changes
      const displayText = this.getDate(nextProps.value).slice(0, 10);
      this.setState({ displayText });
      // update date in picker
      this.picker.setDate(nextProps.value);
    }
  }

  getDate = (date) => {
    if (isValid(date)) {
      return new Date(date).toISOString();
    }
    return '';
  }

  onSelect = (date) => {
    const { onChange } = this.props;
    const newDate = this.getDate(date);
    // update passed in value
    if (onChange) {
      onChange(newDate);
    }
    // update display field
    this.setState({ displayText: newDate.slice(0, 10) });
  }

  initPikaday = () => {
    const { value, minDate } = this.props;

    this.picker = new Pikaday({
      minDate,
      field: this.pickerRef.current,
      onSelect: this.onSelect,
      yearRange: [new Date().getFullYear(), new Date().getFullYear() + 30],
      trigger: this.displayRef.current,
    });

    this.picker.setDate(value);
  }

  render() {
    const {
      disabled, minDate, className, ...rest
    } = this.props;
    const { displayText } = this.state;

    const cn = classNames([
      'field__date',
      className,
    ]);

    return (
      <div data-test={'field__date'} className={cn}>
        {/* field that will be displayed */}
        <input
          {...rest}
          disabled={disabled}
          ref={this.displayRef}
          className={'form-control'}
          value={displayText}
          onChange={() => {}}
          onBlur={() => {}}
          onFocus={() => {}}
          autoComplete={'off'}
          data-test={'field__date-control'}
        />

        {
          !disabled
          && (
            <Icon
              name={'calendar'}
              data-test={'field__date-icon'}
              className={'field__date-icon'}
            />
          )
        }

        {/* date picker */}
        <input
          type={'hidden'}
          ref={this.pickerRef}
          disabled={disabled}
        />
      </div>
    );
  }
}

FieldDate.propTypes = {
  /** Accessible indicator of related information */
  'aria-describedby': T.string,

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string,

  /** Class names to attach to the field wrapper */
  className: T.string,

  /** Disable the input */
  disabled: T.bool,

  /** Id of field */
  id: T.string,

  /** aria-label for the field */
  label: T.string.isRequired,

  /** Minimum date able to select */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),

  /** Name of field */
  name: T.string.isRequired,

  /** Called when radio button changes */
  onChange: T.func,

  /** Value of date selected */
  value: T.string,
};

FieldDate.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  minDate: null,
  onChange: null,
  value: null,
};

export default withField(isInvalidDate)(FieldDate);
