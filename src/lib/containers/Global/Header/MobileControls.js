import React from 'react';

const MobileControls = ({ toggleMobileOpen, routes }) => {
  const menuButtonProps = {
    type: 'button',
    onClick: toggleMobileOpen,
    className: 'mobile-control toggle-menu pull-right',
    'aria-expanded': 'false',
    'aria-controls': 'navigation',
  };

  return (
    <div className="mobile-controls">
      <span className="mobile-control-group mobile-header-icons">
        {/* Add more mobile controls here. These will be on the right side of
        the mobile page header section  */}
      </span>
      <div className="mobile-control-group main-nav-icons pull-right">
        {
          Boolean(routes.length) && (
            <button {...menuButtonProps}>
              <span className="ca-gov-icon-menu hidden-print" aria-hidden="true" />
              <span className="sr-only">Menu</span>
            </button>
          )
        }
        {/* <button className="mobile-control toggle-search">
          <span className="ca-gov-icon-search hidden-print" aria-hidden="true" />
          <span className="sr-only">Search</span>
        </button> */}
      </div>
    </div>
  );
};

export default MobileControls;
