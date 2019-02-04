import * as React from 'react';

import * as types from '../../utils/types';

export interface HeaderProps {
  /** Keeps header fixed to the top */
  fixed?: boolean;

  /** Aligns navigation items */
  align?: 'center'
    | 'left'
    | 'right';

  /** Branding logo */
  brandingLogo?: types.BrandingLogo,

  /** Link to use for 'contact us' link */
  contactLink?: types.ContactLink;

  /** Routes for navigation items */
  routes?: Array<types.Route>;
}

declare class Header extends React.Component<HeaderProps, {}> {}

export default Header;
