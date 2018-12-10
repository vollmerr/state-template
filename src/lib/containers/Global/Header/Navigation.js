import React from 'react';
import T from 'prop-types';

import { routeProp } from '../../../utils/propTypes';
import NavItem from './NavItem';

const Navigation = ({ isMobileOpen, toggleMobileOpen, routes }) => {
  const closedClass = isMobileOpen ? '' : 'mobile-closed';

  if (!routes.length) {
    return null;
  }

  return (
    <nav id="navigation" className={`main-navigation singlelevel auto-highlight ${closedClass}`}>
      <ul id="nav_list" className="top-level-nav">
        {
          routes.map(route => (
            <NavItem {...route} toggleMobileOpen={toggleMobileOpen} />
          ))
        }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isMobileOpen: T.bool.isRequired,
  toggleMobileOpen: T.func.isRequired,
  routes: T.arrayOf(routeProp).isRequired,
};

export default Navigation;
