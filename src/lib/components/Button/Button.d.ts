import * as React from 'react';

import * as Icon from '../Icon/Icon';

export interface ButtonProps {
  /** Use style variant */
  variant?:  ''
    | 'default'
    | 'primary'
    | 'secondary'
    | 'highlight'
    | 'standout';

  /** Style as active */
  active?: boolean;

  /** Base button class to apply */
  baseClass?: string;

  /** Icon to render */
  iconProps: Icon.IconProps;

  /** HTML tag to render as */
  tag?: React.ReactNode;

  /** Content to render, mutually exlusive with `children` */
  text?: React.ReactNode;

  /** Button type */
  type?: ''
    | 'button'
    | 'submit'
    | 'reset';

  /** Style class name to attach to button */
  className?: string;

  /** HTML tag to render as */
  tag?: string | React.ReactNode;

  /** Content to render */
  children?: React.ReactNode;

  /** Icon to render */
  iconProps: Icon.IconProps;
}

declare class Button extends React.Component<ButtonProps, {}> {}

export default Button;
