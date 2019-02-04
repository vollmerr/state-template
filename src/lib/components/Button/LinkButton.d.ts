import * as React from 'react';

import * as Button from './Button';

export interface LinkButtonProps extends Button.ButtonProps {
  /** Path for internal links, mutually exlusive with `href` */
  to?: string;

  /** Path for external links (open in new tab), mutually exlusive with `to` */
  href?: string;
}

declare class LinkButton extends React.Component<LinkButtonProps, {}> {}

export default LinkButton;
