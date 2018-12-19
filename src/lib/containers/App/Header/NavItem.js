import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <Link
        to={path}
        className={'first-level-link'}
        onClick={mappedOnClick}
      >
        <span className={icon} aria-hidden={'true'} />
        {name}
      </Link>
    </li>
  );
};

export default withRouter(NavItem);
