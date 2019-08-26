import React from 'react';
import T from 'prop-types';

import * as propUtils from '../../utils/propTypes';

const MobileControls = ({ routes, toggleMobileOpen }) => {
  const menuButtonProps = {
    type: 'button', /* eslint-disable react/button-has-type */
    onClick: toggleMobileOpen,
    className: 'mobile-control toggle-menu pull-right',
    'aria-expanded': 'false',
    'aria-controls': 'navigation',
  };

  return (
    <div className={'mobile-controls'}>
      <span className={'mobile-control-group mobile-header-icons'} />

      <div className={'mobile-control-group main-nav-icons pull-right'}>
        {
          Boolean(routes.length) && (
            <button {...menuButtonProps}>
              <span className={'ca-gov-icon-menu hidden-print'} aria-hidden />
              <span className={'sr-only'}>Menu</span>
            </button>
          )
        }
      </div>
    </div>
  );
};

MobileControls.propTypes = {
  routes: T.arrayOf(propUtils.route),
  toggleMobileOpen: T.func.isRequired,
};

MobileControls.defaultProps = {
  routes: [],
};

export default MobileControls;
