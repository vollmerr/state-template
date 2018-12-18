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
    tag: Tag,
    ...rest
  } = props;

  const btnClass = classNames([
    'btn',
    className,
    { active: isActive, [`btn-${variant}`]: variant },
  ]);

  return <Tag className={btnClass} {...rest}>{text}</Tag>;
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
  /** HTML tag to use */
  tag: T.oneOfType([T.func, T.string]),
};

Button.defaultProps = {
  variant: '',
  type: 'button',
  className: '',
  tag: 'button',
};

export default Button;
