import React from 'react';
import classNames from 'classnames';
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
    className,
    component: C,
    ...rest
  } = props;

  const btnClass = classNames([
    'btn',
    className,
    { active: isActive, [`btn-${variant}`]: variant },
  ]);

  return <C className={btnClass} {...rest}>{text}</C>;
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
