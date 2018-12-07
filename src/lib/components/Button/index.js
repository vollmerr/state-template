import React from 'react';
import T from 'prop-types';

/**
 * Buttons come in various styles and inherit
 * all properties of a standard html button.
 */
const Button = (props) => {
  const {
    variant,
    isActive,
    text,
    type,
    className,
    component,
    ...rest
  } = props;

  const activeClass = isActive ? 'active' : '';
  const variantClass = variant ? `btn-${variant}` : '';
  const btnClass = `btn ${variantClass} ${className} ${activeClass}`;
  const C = component;

  // eslint-disable-next-line react/button-has-type
  return <C type={type} className={btnClass} {...rest}>{text}</C>;
};

Button.propTypes = {
  /** Use style variant */
  variant: T.oneOf([
    '',
    'default',
    'primary',
    'secondary',
    'highlight',
    'standout',
  ]),
  /** Text to display */
  text: T.string.isRequired,
  /** Button type */
  type: T.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  /** Style class name to attach to button */
  className: T.string,
  /** Component to use */
  component: T.oneOfType([T.func, T.string]),
};

Button.defaultProps = {
  variant: '',
  type: 'button',
  className: '',
  component: 'button',
};

export default Button;
