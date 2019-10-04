import * as React from 'react';

import * as Icon from '../Icon/Icon';

export interface ButtonProps extends Omit<HTMLButtonElement, 'type'> {
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

  /** Use style variant */
  variant?:  ''
    | 'default'
    | 'primary'
    | 'secondary'
    | 'highlight'
    | 'standout';
}

declare class Button extends React.Component<ButtonProps, {}> {}

export default Button;
