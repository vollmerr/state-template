import * as React from 'react';

import * as types from '../../utils/types';

export interface NavTabsProps {
  /** Routes to render and display as nav tabs */
  routes: Array<types.Route>;

  /** Additional class name to attach to top level div */
  className?: string;

  /** Default path to redirect to */
  defaultPath?: string;
}

declare class NavTabs extends React.Component<NavTabsProps, {}> {}

export default NavTabs;
