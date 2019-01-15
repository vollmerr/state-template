import React, { Component } from 'react';
import Pikaday from 'pikaday';

import { isValid } from '../../../utils/date';

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
    // update displayed text when value changes
    if (input.value !== nextProps.input.value) {
      const displayText = this.getDate(nextProps.input.value).slice(0, 10);
      this.setState({ displayText });
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

    if (input.value) {
      this.picker.setDate(input.value);
    }
  }

  render() {
    const {
      input, minDate, disabled, ...props
    } = this.props;
    const { displayText } = this.state;

    return (
      <div className="field-date has-feedback">
        {/* field that will be displayed */}
        <input
          ref={this.displayRef}
          className="form-control"
          disabled={disabled}
          value={displayText}
          onChange={() => {}}
          name={input.name}
        />
        {!disabled && <span className="ca-gov-icon-calendar form-control-feedback" />}
        {/* date picker */}
        <input
          ref={this.pickerRef}
          {...props}
          className="hidden"
        />
      </div>
    );
  }
}

export default DatePicker;
