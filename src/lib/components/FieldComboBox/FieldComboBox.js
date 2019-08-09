import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { isEmptyText } from '../../utils/validate';
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
    this.initDisplayValue();
    document.body.addEventListener('click', this.checkHide);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    // handle reset form (no value, set display as no value)
    if (value && !nextProps.value) {
      this.setDisplayValue('');
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.checkHide);
  }

  initDisplayValue = () => {
    const { value, options } = this.props;

    options.find((option, index) => {
      if (option.value === value) {
        this.setState({ focusedIndex: index });
        this.setDisplayValue(option.label);
        return true;
      }
      return false;
    });
  }

  checkKey = (event) => {
    const key = event.which || event.keyCode;

    switch (key) {
      case keyCodes.up:
      case keyCodes.down:
      case keyCodes.esc:
      case keyCodes.enter:
        event.preventDefault();
        return;
      default:
        this.updateList();
    }
  }

  // assures listbox is visible by adjusting to top if would scroll off page
  positionList = () => {
    const listbox = this.listboxRef.current;

    if (!listbox) {
      return;
    }

    const { top, bottom, height } = listbox.getBoundingClientRect();

    if (top < 0) {
      // scrolled off top, position below input
      listbox.style.top = `${this.inputRef.current.offsetHeight}px`;
    } else if (bottom > window.innerHeight) {
      // scrolled off bottom, position above input
      listbox.style.top = `-${height}px`;
    }
  }

  updateList = () => {
    const { options, onShow } = this.props;

    const value = this.inputRef.current.value.toLowerCase();
    const filteredList = options.filter(x => (
      !x.hidden && x.label.toLowerCase().indexOf(value) > -1
    ));

    this.setState({
      filteredList,
      showListbox: true,
      activeIndex: 0,
      focusedIndex: 0,
    }, () => {
      this.positionList();
      if (onShow) onShow();
    });
  }

  setActiveItem = (event) => {
    const { id } = this.props;
    const { activeIndex, filteredList } = this.state;
    const key = event.which || event.keyCode;

    if (key === keyCodes.esc) {
      this.hideListbox();
      return;
    }

    let newActiveIndex = activeIndex;
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
        this.selectItem(this.getItemAt(activeIndex));
        return;
      case keyCodes.tab:
        this.checkSelection();
        this.hideListbox();
        return;
      default:
        break;
    }

    const activeItem = this.getItemAt(newActiveIndex);

    if (activeItem) {
      const itemId = `${id}-item-${newActiveIndex}`;
      this.inputRef.current.setAttribute('aria-activedescendant', itemId);
      this.scrollToFocus(newActiveIndex);
    } else {
      this.inputRef.current.setAttribute('aria-activedescendant', '');
    }

    this.setState({
      activeIndex: newActiveIndex,
      focusedIndex: newActiveIndex,
    });
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

  setDisplayValue = (value) => {
    if (this.inputRef.current) {
      this.inputRef.current.value = value;
    }
  }

  getItemAt = (index) => {
    const { filteredList } = this.state;

    return filteredList[index];
  }

  selectItem = (item) => {
    const { onChange } = this.props;

    if (item) {
      this.hideListbox();
      this.setDisplayValue(item.label);
      onChange(item.value);
    }
  }

  checkHide = (event) => {
    const { target } = event;
    // if event is outside this component hide the listbox
    if (target !== this.wrapperRef.current && !this.wrapperRef.current.contains(target)) {
      this.hideListbox();
    }
  }

  hideListbox = () => {
    const { onHide } = this.props;

    this.setState({
      activeIndex: -1,
      showListbox: false,
    }, onHide);
  }

  checkSelection = () => {
    const { activeIndex } = this.state;

    if (activeIndex >= 0) {
      const activeitem = this.getItemAt(activeIndex);
      this.selectItem(activeitem);
    }
  }

  selectFocusedItem = () => {
    const { onChange } = this.props;
    const { focusedIndex } = this.state;
    const item = this.getItemAt(focusedIndex);

    if (item) {
      this.setDisplayValue(item.label);
      onChange(item.value);
    } else {
      this.setDisplayValue('');
      onChange('');
    }
  }

  onClickIcon = () => {
    this.updateList();
    this.inputRef.current.focus();
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
          aria-haspopup='listbox'
          aria-owns={listboxId}
          id={`${id}-combobox`}
          role={'combobox'}
        >
          <input
            aria-controls={listboxId}
            className={'form-control'}
            id={id}
            type='text'
            onKeyUp={this.checkKey}
            onKeyDown={this.setActiveItem}
            onFocus={this.checkSelection}
            onBlur={this.selectFocusedItem}
            disabled={disabled}
            ref={this.inputRef}
          />

          {
            !disabled
            && (
              <Icon
                name={'triangle-down'}
                data-test={'field__combo-box-icon'}
                className={'field__combo-box-icon'}
                onClick={this.onClickIcon}
              />
            )
          }
        </div>

        {showListbox && (
          <ul
            aria-label={label}
            className={'field__combo-box--listbox'}
            id={listboxId}
            role='listbox'
            ref={this.listboxRef}
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
                  onClick={() => this.selectItem(option)}
                  id={`${id}-item-${i}`}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}

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
  value: null,
};

export default withField(isEmptyText)(FieldComboBox);
