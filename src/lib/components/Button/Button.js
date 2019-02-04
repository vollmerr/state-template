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
    variant,
    active,
    text,
    className,
    tag: Tag,
    children,
    iconProps,
    ...rest
  } = props;

  const btnClass = classNames([
    'btn',
    className,
    { active, [`btn-${variant}`]: variant },
  ]);

  return (
    <Tag data-test={'button'} className={btnClass} {...rest}>
      {iconProps && <><Icon {...iconProps} />{' '}</>}
      {text || children}
    </Tag>
  );
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

  /** Style as active */
  active: T.bool,

  /** Content to render, mutually exclusive with `children` */
  text: T.node,

  /** Button type */
  type: T.oneOf([
    '',
    'button',
    'submit',
    'reset',
  ]),

  /** Style class name to attach to button */
  className: T.string,

  /** HTML tag to render as */
  tag: T.oneOfType([T.func, T.string]),

  /** Content to render */
  children: T.node,

  /** Icon to render */
  iconProps: T.shape({ ...Icon.propTypes }),
};

Button.defaultProps = {
  variant: '',
  active: false,
  text: null,
  type: 'button',
  className: '',
  tag: 'button',
  children: null,
  iconProps: null,
};

export default Button;
