import React from 'react';
import T from 'prop-types';

import * as propUtils from '../../utils/propTypes';

import Button from '../Button';

const MobileControls = ({ routes, toggleMobileOpen }) => {
  const menuButtonProps = {
    'aria-controls': 'navigation',
    'aria-expanded': 'false',
    baseClass: '',
    className: 'mobile-control toggle-menu pull-right hidden-print',
    iconProps: { name: 'menu', srOnly: 'Menu' },
    onClick: toggleMobileOpen,
    type: 'button',
  };

  return (
    <div className={'mobile-controls'}>
      <span className={'mobile-control-group mobile-header-icons'} />

      {
        Boolean(routes.length) && (
          <div className={'mobile-control-group main-nav-icons pull-right'}>
            <Button {...menuButtonProps} />
          </div>
        )
      }
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
