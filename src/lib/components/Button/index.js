import React from 'react';
import T from 'prop-types';

/**
 * Buttons come in various styles and inherit
 * all properties of a standard html button.
 */
const Button = (props) => {
  const {
    primary,
    secondary,
    highlight,
    standout,
    isActive,
    text,
    type,
    className,
    component,
    ...rest
  } = props;

  let btnStyle = 'default';
  if (primary) {
    btnStyle = 'primary';
  } else if (secondary) {
    btnStyle = 'secondary';
  } else if (highlight) {
    btnStyle = 'highlight';
  } else if (standout) {
    btnStyle = 'standout';
  }

  const activeClass = isActive ? 'active' : '';
  const btnClass = `btn btn-${btnStyle} ${className} ${activeClass}`;
  const C = component;

  // eslint-disable-next-line react/button-has-type
  return <C type={type} className={btnClass} {...rest}>{text}</C>;
};

Button.propTypes = {
  /** Use `primary` styling */
  primary: T.bool,
  /** Use `secondary` styling */
  secondary: T.bool,
  /** Use `highlight` styling */
  highlight: T.bool,
  /** Use `standout` styling */
  standout: T.bool,
  /** Adds active styling */
  isActive: T.bool,
  /** Text to display */
  text: T.string.isRequired,
  /** Button type */
  type: T.oneOf(['button', 'submit', 'reset']),
  /** Style class name to attach to button */
  className: T.string,
  /** Component to use */
  component: T.oneOfType([T.func, T.string]),
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  highlight: false,
  standout: false,
  isActive: false,
  type: 'button',
  className: '',
  component: 'button',
};

export default Button;
