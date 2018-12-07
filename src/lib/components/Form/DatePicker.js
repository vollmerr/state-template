import React, { Component } from 'react';
import Pikaday from 'pikaday';

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
    // handle form resets
    if (!nextProps.input.value) {
      this.setState({ displayText: '' });
    }
  }

  onSelect = (date) => {
    const { input } = this.props;
    const newDate = new Date(date).toISOString();
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
      <div className="fieldDate has-feedback">
        {/* field that will be displayed */}
        <input
          ref={this.displayRef}
          className="form-control"
          disabled={disabled}
          value={displayText}
          onChange={() => {}}
        />
        {!disabled && <span className="ca-gov-icon-calendar form-control-feedback" />}
        {/* date picker */}
        <input
          ref={this.pickerRef}
          {...props}
          className="hidden"
        />
        {/* handle dispatching to redux-form */}
        <input
          className="hidden"
          id={input.name}
          onChange={(v) => { console.log('changed: ', v); }}
        />
      </div>
    );
  }
}

export default DatePicker;
