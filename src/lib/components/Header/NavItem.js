import React from 'react';
import { withRouter } from 'react-router-dom';

import A from '../A';

/**
 * A single navigation item
 * @param {string} to       - path to navigate to
 * @param {array} children  - children to render
 * @param {func} onClick    - fired when item is clicked on
 * @param {string} hash     - current hash name from redux
 */
const NavItem = ({
  name,
  path,
  href,
  icon,
  toggleMobileOpen,
  hash,
  onClick,
  location,
  ...props
}) => {
  const isActive = location.pathname === path;
  const activeClass = isActive ? 'active' : '';
  const mappedOnClick = (event) => {
    if (onClick) onClick(event);
    toggleMobileOpen(event);
  };

  return (
    <li className={`nav-item ${activeClass}`}>
      <A
        to={path}
        href={href}
        className={'first-level-link'}
        onClick={mappedOnClick}
      >
        <span className={icon} aria-hidden={'true'} />
        {name}
      </A>
    </li>
  );
};

export default withRouter(NavItem);
