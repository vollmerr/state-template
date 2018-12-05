import React from 'react';

import NavItem from './NavItem';

const Navigation = ({ isMobileOpen, toggleMobileOpen, routes }) => {
  const closedClass = isMobileOpen ? '' : 'mobile-closed';

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

export default Navigation;
