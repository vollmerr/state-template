import React from 'react';
import T from 'prop-types';

/**
 * Renders an overlay that blocks user interaction
 */
const Overlay = (props) => {
  const {
    show,
    onClick,
    onKeyPress,
    isMobile,
    ...rest
  } = props;

  if (!show) {
    return null;
  }

  const overlayProps = {
    onClick,
    role: 'presentation',
    onKeyPress: onKeyPress || onClick,
    className: `overlay ${isMobile && 'mobile-only'}`,
    ...rest,
  };

  return <div {...overlayProps} />;
};

Overlay.propTypes = {
  /** Display the overlay */
  show: T.bool.isRequired,
  /** Click handler for overlay */
  onClick: T.func,
  /** Key Press handler for overlay */
  onKeyPress: T.func,
  /** If should only render in mobile viewport */
  isMobile: T.bool,
};

Overlay.defaultProps = {
  onClick: undefined,
  onKeyPress: undefined,
  isMobile: false,
};

export default Overlay;
