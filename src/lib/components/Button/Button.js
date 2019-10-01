import React from 'react';
import classNames from 'classnames';
import T from 'prop-types';

import Icon from '../Icon';

/**
 * Buttons come in various styles and inherit
 * all properties of a standard html button.
 */
const Button = (props) => {
  const {
    active,
    baseClass,
    children,
    className,
    iconProps,
    tag: Tag,
    text,
    variant,
    ...rest
  } = props;

  const btnClass = classNames([
    baseClass,
    className,
    { active, [`${baseClass}-${variant}`]: variant },
  ]);

  return (
    <Tag data-test={'button'} className={btnClass} {...rest}>
      {iconProps && <Icon {...iconProps} />}
      {text || children}
    </Tag>
  );
};

Button.propTypes = {
  /** Style as active */
  active: T.bool,

  /** Base button class to apply */
  baseClass: T.string,

  /** Content to render, mutually exclusive with `text` */
  children: T.node,

  /** Style class name to attach to button */
  className: T.string,

  /** Icon to render */
  iconProps: T.shape({ ...Icon.propTypes }),

  /** HTML tag to render as */
  tag: T.elementType,

  /** Content to render, mutually exclusive with `children` */
  text: T.node,

  /** Button type */
  type: T.oneOf([
    '',
    'button',
    'submit',
    'reset',
  ]),

  /** Use style variant */
  variant: T.oneOf([
    '',
    'default',
    'primary',
    'secondary',
    'highlight',
    'standout',
  ]),
};

Button.defaultProps = {
  active: false,
  baseClass: 'btn',
  children: null,
  className: '',
  iconProps: null,
  tag: 'button',
  text: null,
  type: 'button',
  variant: '',
};

export default Button;
