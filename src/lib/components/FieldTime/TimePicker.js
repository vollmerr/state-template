import React, { Component } from 'react';

import RadioButton from '../FieldRadioButtons/RadioButton';

class TimePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hour: '',
      minute: '',
      timeOfDay: '',
    };
  }

  componentDidMount() {
    this.updateFromReduxForm();
  }

  componentWillReceiveProps(nextProps) {
    // handle form resets
    if (!nextProps.input.value) {
      this.reset();
    }
  }

  reset = () => {
    this.setState({
      hour: '',
      minute: '',
      timeOfDay: '',
    }, this.updateReduxForm);
  }

  // updates local state based off redux forms value
  updateFromReduxForm = () => {
    const { input } = this.props;
    const fullTime = input.value;
    const matches = fullTime.split(/:| /);

    if (matches.length === 2) {
      this.setState({
        hour: matches[0],
        minute: matches[1],
        timeOfDay: matches[2],
      });
    }
  }

  // updates full time tin redux form store
  updateReduxForm = () => {
    const { input } = this.props;
    const { hour, minute, timeOfDay } = this.state;
    // only update if a valid value
    if (hour && minute && timeOfDay) {
      input.onChange(`${hour}:${minute} ${timeOfDay}`);
    }
  }

  normalizeNumber = ({ max, field }) => (event) => {
    const { value } = event.target;

    const num = Number(value);
    let text = String(num);
    if (num < 10) {
      text = `0${num}`;
    } else if (num > max) {
      text = text.substring(text.length - 2);
    }

    if (Number(text) <= max) {
      this.setState({ [field]: text }, this.updateReduxForm);
    }
  }

  onChangeHour = event => this.normalizeNumber({ max: 12, field: 'hour' })(event);

  onChangeMinute = event => this.normalizeNumber({ max: 59, field: 'minute' })(event);

  onChangeTimeOfDay = (value) => {
    this.setState({ timeOfDay: value }, this.updateReduxForm);
  }

  renderTimeOfDay = () => {
    const { timeOfDay } = this.state;
    const checkProps = {
      input: {
        value: timeOfDay,
        onChange: this.onChangeTimeOfDay,
      },
    };

    return (
      <div className={'radios third'}>
        <RadioButton value={'am'} label={'am'} {...checkProps} />
        <RadioButton value={'pm'} label={'pm'} {...checkProps} />
      </div>
    );
  }

  render() {
    const { hour, minute } = this.state;

    return (
      <div className={'time-picker'}>
        <input onChange={this.onChangeHour} value={hour} className={'form-control third'} placeholder={'hours'} />
        <input onChange={this.onChangeMinute} value={minute} className={'form-control third'} placeholder={'minutes'} />
        {this.renderTimeOfDay()}
        <div className={'clearfix'} />
      </div>
    );
  }
}

export default TimePicker;
