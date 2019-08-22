import React from 'react';
import T from 'prop-types';

import * as propUtils from '../../utils/propTypes';
import NavItem from './NavItem';

const Navigation = ({
  isMobileOpen,
  routes,
  toggleMobileOpen,
}) => {
  const closedClass = isMobileOpen ? '' : 'mobile-closed';

  if (!routes.length) {
    return null;
  }

  return (
    <nav id={'navigation'} className={`main-navigation singlelevel auto-highlight ${closedClass}`}>
      <ul id={'nav_list'} className={'top-level-nav'}>
        {
          routes.map((route) => (
            <NavItem {...route} toggleMobileOpen={toggleMobileOpen} />
          ))
        }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isMobileOpen: T.bool.isRequired,
  routes: T.arrayOf(propUtils.route).isRequired,
  toggleMobileOpen: T.func.isRequired,
};

export default Navigation;
