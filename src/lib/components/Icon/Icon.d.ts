import * as React from 'react';

import * as types from '../../utils/types';

export interface IconProps {
  /** Name of icon to use (auto prefixes with ca-gov-icon-) */
  name: string;

  /** Class names to attach to the top level div */
  className?: string;

  /** HTML tag to render as  */
  tag?: React.ReactNode;
}

declare class Icon extends React.Component<IconProps, {}> {}

export default Icon;
