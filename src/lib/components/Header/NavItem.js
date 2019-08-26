import React from 'react';
import T from 'prop-types';
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
  href,
  icon,
  location,
  name,
  onClick,
  path,
  toggleMobileOpen,
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
        <span className={icon} aria-hidden />
        {name}
      </A>
    </li>
  );
};

NavItem.propTypes = {
  href: T.string,
  icon: T.string,
  location: T.shape({ pathname: T.string }).isRequired,
  name: T.string.isRequired,
  onClick: T.func,
  path: T.string,
  toggleMobileOpen: T.func.isRequired,
};

NavItem.defaultProps = {
  href: null,
  icon: null,
  onClick: null,
  path: null,
};

export default withRouter(NavItem);
