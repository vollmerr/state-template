import React from 'react';
import T from 'prop-types';
import Pikaday from 'pikaday';

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
    const { disabled, minDate, ...rest } = this.props;
    const { displayText } = this.state;

    return (
      <div data-test={'field--date'} className={'field-date has-feedback'}>
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
          data-test={'field--date-control'}
        />

        {
          !disabled
          && (
            <Icon
              data-test={'field--date-icon'}
              name={'calendar'}
              className={'form-control-feedback'}
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
  /** Value of date selected */
  value: T.string,

  /** Minimum date able to select */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),

  /** Disable the input */
  disabled: T.bool,

  /** Called when date changes */
  onChange: T.func,
};

FieldDate.defaultProps = {
  value: null,
  minDate: null,
  disabled: false,
  onChange: null,
};

export default withField(isInvalidDate)(FieldDate);
