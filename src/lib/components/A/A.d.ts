import * as React from 'react';

import * as Icon from '../Icon/Icon';

export interface AProps {
  /** Content to render */
  children?: React.ReactNode;

  /** Path for external links (open in new tab), mutually exlusive with `to` */
  href?: string;

  /** Props for icon to render as content */
  iconProps?: Icon.IconProps;

  /** Content to render, mutually exlusive with `children` */
  text?: string;

  /** Path for internal links, mutually exlusive with `href` */
  to?: string;
}

declare class A extends React.Component<AProps, {}> {}

export default A
