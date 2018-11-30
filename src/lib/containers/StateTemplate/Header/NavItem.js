import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../selectors';

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
}) => {
  const isActive = path === hash;
  const activeClass = isActive ? 'active' : '';

  return (
    <li className={`nav-item ${activeClass}`}>
      <Link
        to={path}
        className={'first-level-link'}
        onClick={toggleMobileOpen}
      >
        <span className={icon} aria-hidden={'true'} />
        {name}
      </Link>
    </li>
  );
};

export const mapStateToProps = createStructuredSelector({
  hash: selectors.getHash(),
});

const withRedux = connect(mapStateToProps);

export default withRedux(NavItem);
