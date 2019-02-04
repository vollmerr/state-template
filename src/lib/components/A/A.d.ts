import * as React from 'react';

export interface AProps {
  /** Path for internal links, mutually exlusive with `href` */
  to?: string;

  /** Path for external links (open in new tab), mutually exlusive with `to` */
  href?: string;

  /** Content to render, mutually exlusive with `children` */
  text?: string;

  /** Content to render */
  children?: React.ReactNode;
}

declare class A extends React.Component<AProps, {}> {}

export default A
