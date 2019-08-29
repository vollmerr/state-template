import React from 'react';
import T from 'prop-types';
import Pikaday from 'pikaday';
import classNames from 'classnames';

import { isValidDate } from '../../utils/validate';
import { keyCodes } from '../../utils/aria';
import { isValid } from '../../utils/date';
import { withField } from '../Field';
import Icon from '../Icon';

// Date picker for redux-form using pikaday library
// see https://whatsock.com/tsg/Coding%20Arena/ARIA%20Date%20Pickers/ARIA%20Date%20Picker%20(Basic)/demo.htm for accesibility needed
export class FieldDate extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayText: '',
    };

    this.pickerRef = React.createRef();
    this.displayRef = props.inputRef || React.createRef();
    this.picker = null;
  }

  componentDidMount() {
    this.initPikaday();
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.updateDate(value);
    }
  }

  getDisplayDate = (date) => {
    if (isValid(date)) {
      return new Date(date).toISOString().slice(0, 10);
    }
    return '';
  }

  getPickerDate = (date) => {
    if (isValid(date)) {
      const d = new Date(date);
      return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    }
    return '';
  }

  setWeekStart = () => {
    const selected = new Date(this.picker.getDate());
    selected.setDate(selected.getDate() - selected.getDay());
    this.updateDate(selected);
  }

  setWeekEnd = () => {
    const selected = new Date(this.picker.getDate());
    const dayOfMonth = selected.getDate();
    const daysLeft = 6 - selected.getDay();
    selected.setDate(dayOfMonth + daysLeft);
    this.updateDate(selected);
  }

  setPrevMonth = () => {
    const selected = new Date(this.picker.getDate());
    const month = selected.getMonth();
    const prevMonth = month === 1 ? 12 : month - 1;
    selected.setMonth(prevMonth);
    if (prevMonth === 12) {
      selected.setFullYear(selected.getFullYear() - 1);
    }
    this.updateDate(selected);
  }

  setNextMonth = () => {
    const selected = new Date(this.picker.getDate());
    const month = selected.getMonth();
    const nextMonth = month === 12 ? 1 : month + 1;
    selected.setMonth(nextMonth);
    if (nextMonth === 1) {
      selected.setFullYear(selected.getFullYear() + 1);
    }
    this.updateDate(selected);
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ displayText: value });
    this.updatePicker(value);
  }

  onClose = () => {
    const { onChange } = this.props;
    const date = this.picker.getDate();
    // update passed in value
    if (onChange) {
      onChange(this.getDisplayDate(date));
    }
    // update display field
    this.updateDisplay(date);
  }

  onKeyDown = (event) => {
    const { value } = this.props;
    const { keyCode } = event;

    // enter => select date
    if (keyCode === keyCodes.enter) {
      event.preventDefault();
      this.picker.hide();
    }
    // esc => no action / do not update (revert to what value was)
    if (keyCode === keyCodes.esc) {
      event.preventDefault();
      this.updatePicker(value);
      this.picker.hide();
    }
    // home => go to beggining of row
    if (keyCode === keyCodes.home) {
      event.preventDefault();
      this.setWeekStart();
    }
    // end => go to end of row
    if (keyCode === keyCodes.end) {
      event.preventDefault();
      this.setWeekEnd();
    }
    // pagedown => go to previous month
    if (keyCode === keyCodes.pageDown) {
      event.preventDefault();
      this.setPrevMonth();
    }
    // pageup => go to next month
    if (keyCode === keyCodes.pageUp) {
      event.preventDefault();
      this.setNextMonth();
    }
  }

  onKeyUp = (event) => {
    const { keyCode } = event;
    // left, up, right, down => change date
    if ([keyCodes.up, keyCodes.down, keyCodes.left, keyCodes.right].includes(keyCode)) {
      event.preventDefault();
      this.updateDisplay(this.picker.getDate());
    }
  }

  updateDisplay = (value) => {
    const displayText = this.getDisplayDate(value);
    this.setState({ displayText });
  }

  updatePicker = (value) => {
    const pickerValue = this.getPickerDate(value);
    this.picker.setDate(pickerValue);
  }

  updateDate = (value) => {
    this.updateDisplay(value);
    this.updatePicker(value);
  }

  initPikaday = () => {
    const { value, minDate } = this.props;

    this.picker = new Pikaday({
      minDate,
      field: this.pickerRef.current,
      onClose: this.onClose,
      onSelect: this.onSelect,
      yearRange: [new Date().getFullYear(), new Date().getFullYear() + 30],
      trigger: this.displayRef.current,
      format: 'YYYY-MM-DD',
    });

    this.updateDate(value);
  }

  render() {
    const {
      'aria-describedby': ariaDescBy,
      className,
      disabled,
      inputRef,
      label,
      minDate,
      name,
      ...rest
    } = this.props;
    const { displayText } = this.state;

    const cn = classNames([
      'field__date',
      className,
    ]);

    const infoId = `${name}--date-info`;
    const describedby = ariaDescBy ? `${ariaDescBy} ${infoId}` : infoId;

    return (
      <div data-test={'field__date'} className={cn}>
        {/* field that will be displayed */}
        <input
          {...rest}
          autoComplete={'off'}
          aria-describedby={describedby}
          className={'form-control'}
          data-test={'field__date-control'}
          disabled={disabled}
          ref={this.displayRef}
          name={name}
          value={displayText}
          onChange={this.onChange}
          onBlur={this.onClose}
          onFocus={() => { }}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
        />

        <p id={infoId} className={'hidden'}>
          Type a YYYY-MM-DD format date, hit escape to cancel.
          Use the arrow keys for picking from the date picker.
          Use page up and down for navigating months.
          Use home and end for navigating weeks.
        </p>

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

        {/* redux-form field */}
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

  /** Ref to attach to input */
  inputRef: T.shape({
    current: T.object,
  }),

  /** Label for the field */
  label: T.string.isRequired,

  /** Minimum date able to select */
  minDate: T.oneOfType([T.string, T.instanceOf(Date)]),

  /** Name of field */
  name: T.string.isRequired,

  /** Called when radio button changes */
  onChange: T.func,

  /** Value of date selected */
  value: T.oneOfType([T.string, T.instanceOf(Date)]),
};

FieldDate.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  inputRef: null,
  minDate: null,
  onChange: null,
  value: null,
};

export default withField(isValidDate)(FieldDate);
