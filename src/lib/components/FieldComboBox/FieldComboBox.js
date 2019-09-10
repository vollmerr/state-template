import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyRadio } from '../../utils/validate';
import { keyCodes } from '../../utils/aria';
import * as propUtils from '../../utils/propTypes';
import { withField } from '../Field';
import Icon from '../Icon';

/**
 * An accessible combo box field that allows inputing a value to search through a list.
 *
 * Based off https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 * to provide accessibility features.
 */
export class FieldComboBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      focusedIndex: -1,
      filteredList: props.options,
      showListbox: false,
    };

    this.wrapperRef = React.createRef();
    this.inputRef = props.inputRef || React.createRef();
    this.listboxRef = React.createRef();
  }

  componentDidMount() {
    this.setItemFromValue();
    document.body.addEventListener('click', this.onClickOutside);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value !== prevProps.value) {
      this.setItemFromValue();
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside);
  }

  setItemFromValue = () => {
    const { value, options } = this.props;

    const item = options.find((option, index) => {
      if (option.value === value) {
        this.setState({ focusedIndex: index });
        return true;
      }
      return false;
    });

    this.setLabel(item);
  }

  showListbox = () => {
    const { onShow } = this.props;
    const { showListbox } = this.state;

    if (!showListbox) {
      this.setState({
        activeIndex: 0,
        focusedIndex: 0,
        showListbox: true,
      });

      if (onShow) onShow();
    }
  }

  hideListbox = () => {
    const { onHide } = this.props;

    this.setState({
      activeIndex: -1,
      showListbox: false,
    });

    if (onHide) onHide();
  }

  updateFilteredList = () => {
    const { options } = this.props;
    const input = this.inputRef.current;

    const value = input.value.toLowerCase();
    const filteredList = options.filter((x) => (
      !x.hidden && x.label.toLowerCase().indexOf(value) > -1
    ));

    this.setState({ filteredList }, this.positionList);
  }

  scrollToFocus = (index) => {
    const listbox = this.listboxRef.current;

    if (listbox) {
      const selectedItem = listbox.children[index];

      if (selectedItem) {
        listbox.scrollTop = selectedItem.offsetTop;
      }
    }
  }

  positionList = () => {
    const listbox = this.listboxRef.current;
    const input = this.inputRef.current;

    if (!listbox) return;

    const { top, bottom, height } = listbox.getBoundingClientRect();

    if (top < 0) {
      // scrolled off top, position below input
      listbox.style.top = `${input.offsetHeight}px`;
    } else if (bottom > window.innerHeight) {
      // scrolled off bottom, position above input
      listbox.style.top = `-${height}px`;
    }
  }

  getItemAt = (index) => {
    const { filteredList } = this.state;
    return filteredList[index];
  }

  setLabel = (item = {}) => {
    const { label } = item;
    const input = this.inputRef.current;

    if (input) {
      input.value = label || '';
    }
  }

  setValue = (item = {}) => {
    const { onChange } = this.props;
    onChange(item.value);
  }

  onClickOutside = (event) => {
    const { target } = event;
    const wrapper = this.wrapperRef.current;
    // if event is outside this component hide the listbox
    if (target !== wrapper && !wrapper.contains(target)) {
      this.hideListbox();
    }
  }

  onBlur = () => {
    const { focusedIndex } = this.state;
    const item = this.getItemAt(focusedIndex);

    this.setLabel(item);
    this.setValue(item);
  }

  onFocus = () => {
    const { activeIndex } = this.state;

    if (activeIndex >= 0) {
      const activeItem = this.getItemAt(activeIndex);
      this.onSelectItem(activeItem);
    }
  }

  onKeyDown = (event) => {
    const { id } = this.props;
    const { activeIndex, filteredList } = this.state;
    const key = event.which || event.keyCode;
    // [ESC] pressed - hide listbox
    if (key === keyCodes.esc) {
      this.hideListbox();
      return;
    }

    this.showListbox();

    let newActiveIndex = activeIndex < 0
      ? 0
      : activeIndex;

    switch (key) {
      // up, move active up 1 or loop to end
      case keyCodes.up:
        newActiveIndex -= 1;
        if (newActiveIndex < 0) {
          newActiveIndex = filteredList.length - 1;
        }
        break;
      // up, move active down 1 or loop to begining
      case keyCodes.down:
        newActiveIndex += 1;
        if (newActiveIndex > filteredList.length - 1) {
          newActiveIndex = 0;
        }
        break;
      case keyCodes.enter:
        event.preventDefault();
        this.onSelectItem(this.getItemAt(newActiveIndex));
        return;
      case keyCodes.tab:
        this.hideListbox();
        return;
      default:
        break;
    }

    const activeItem = this.getItemAt(newActiveIndex);
    const input = this.inputRef.current;

    if (activeItem) {
      const itemId = `${id}-item-${newActiveIndex}`;
      input.setAttribute('aria-activedescendant', itemId);
      this.scrollToFocus(newActiveIndex);
    } else {
      input.setAttribute('aria-activedescendant', '');
    }

    this.setState({
      activeIndex: newActiveIndex,
      focusedIndex: newActiveIndex,
    });
  }

  onKeyUp = (event) => {
    const key = event.which || event.keyCode;

    switch (key) {
      case keyCodes.down:
      case keyCodes.enter:
      case keyCodes.esc:
      case keyCodes.up:
        event.preventDefault();
        return;
      default:
        this.updateFilteredList();
    }
  }

  onSelectItem = (item) => {
    const { onSelect } = this.props;

    this.hideListbox();
    this.setValue(item);

    if (onSelect) onSelect(item);
  }

  onClickIcon = () => {
    const { showListbox } = this.state;
    const input = this.inputRef.current;

    if (showListbox) {
      this.hideListbox();
    } else {
      this.showListbox();
      this.updateFilteredList();
      input.focus();
    }
  }

  render() {
    const {
      className,
      disabled,
      id,
      name,
      label,
    } = this.props;

    const {
      activeIndex,
      filteredList,
      showListbox,
    } = this.state;

    const cn = classNames([
      'field__combo-box',
      className,
    ]);

    const listboxId = `${id}-listbox`;

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/role-has-required-aria-props */
    return (
      <div data-test={'field__combo-box'} className={cn} ref={this.wrapperRef}>
        <div
          aria-expanded={showListbox}
          aria-haspopup={'listbox'}
          aria-owns={listboxId}
          id={`${id}-combobox`}
          role={'combobox'}
        >
          <input
            aria-controls={listboxId}
            className={'form-control'}
            disabled={disabled}
            id={id}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            ref={this.inputRef}
            type={'text'}
          />

          <Icon
            hidden={disabled}
            name={'triangle-down'}
            data-test={'field__combo-box-icon'}
            className={'field__combo-box-icon'}
            onClick={this.onClickIcon}
          />
        </div>

        <ul
          aria-label={label}
          className={'field__combo-box--listbox'}
          id={listboxId}
          role={'listbox'}
          ref={this.listboxRef}
          hidden={!showListbox}
        >
          {filteredList.map((option, i) => {
            const isActive = activeIndex === i;
            const activeClass = isActive ? 'bg-primary' : '';

            return (
              <li
                key={option.value}
                role={'option'}
                aria-selected={isActive}
                className={activeClass}
                onClick={() => this.onSelectItem(option)}
                id={`${id}-item-${i}`}
              >
                {option.label}
              </li>
            );
          })}
        </ul>

        <input
          type={'hidden'}
          name={name}
          disabled={disabled}
        />
      </div>
    );
    /* eslint-enable jsx-a11y/click-events-have-key-events */
    /* eslint-enable jsx-a11y/role-has-required-aria-props */
  }
}

FieldComboBox.propTypes = {
  /** Accessible indicator of related information */
  'aria-describedby': T.string, // eslint-disable-line react/no-unused-prop-types

  /** Accessible indicator for errors existing */
  'aria-invalid': T.string, // eslint-disable-line react/no-unused-prop-types

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

  /** Name of field */
  name: T.string.isRequired,

  /** Called when input changes, provided by redux-form */
  onChange: T.func.isRequired,

  /** Called after listbox is hidden */
  onHide: T.func,

  /** Called after listbox is shown */
  onShow: T.func,

  /** Called after listbox item is selected */
  onSelect: T.func,

  /** Options to select from */
  options: T.arrayOf(propUtils.option).isRequired,

  /** Value of option, provided by redux-form */
  value: T.string,
};

FieldComboBox.defaultProps = {
  'aria-describedby': null,
  'aria-invalid': 'false',
  className: null,
  disabled: false,
  id: null,
  inputRef: null,
  onHide: null,
  onShow: null,
  onSelect: null,
  value: null,
};

export default withField(isEmptyRadio)(FieldComboBox);
