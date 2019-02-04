import React, { Component } from 'react';
import T from 'prop-types';
import Pikaday from 'pikaday';

import { isValid } from '../../utils/date';
import Icon from '../Icon';

// Date picker that uses pikaday...
class DatePicker extends Component {
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
    const { input } = this.props;
    const newValue = nextProps.input.value;
    if (input.value !== newValue) {
      // update displayed text when value changes
      const displayText = this.getDate(newValue).slice(0, 10);
      this.setState({ displayText });
      // update date in picker
      this.picker.setDate(newValue);
    }
  }

  getDate = (date) => {
    if (isValid(date)) {
      return new Date(date).toISOString();
    }
    return '';
  }

  onSelect = (date) => {
    const { input } = this.props;
    const newDate = this.getDate(date);
    // update redux-form
    input.onChange(newDate);
    // update display field
    this.setState({ displayText: newDate.slice(0, 10) });
  }

  initPikaday = () => {
    const { input, minDate } = this.props;

    this.picker = new Pikaday({
      field: this.pickerRef.current,
      onSelect: this.onSelect,
      minDate,
      yearRange: [new Date().getFullYear(), new Date().getFullYear() + 30],
      trigger: this.displayRef.current,
    });

    this.picker.setDate(input.value);
  }

  render() {
    const {
      input, disabled, minDate, ...rest
    } = this.props;
    const { displayText } = this.state;

    return (
      <div className="field-date has-feedback">
        {/* field that will be displayed */}
        <input
          ref={this.displayRef}
          className={'form-control'}
          disabled={disabled}
          value={displayText}
          onChange={() => {}}
          name={input.name}
          autoComplete={'off'}
        />
        {
          !disabled
          && <Icon name={'calendar'} className={'form-control-feedback'} />
        }
        {/* date picker */}
        <input
          ref={this.pickerRef}
          {...rest}
          className={'hidden'}
        />
      </div>
    );
  }
}

DatePicker.propsTypes = {
  /** redux-form input object */
  input: T.object.isRequired,
  /** picker is disabled */
  disabled: T.bool,
  /** min date to select from */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),
};

DatePicker.defaultProps = {
  disabled: false,
  minDate: null,
};

export default DatePicker;
