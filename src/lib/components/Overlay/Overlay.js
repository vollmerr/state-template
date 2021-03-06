import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

/**
 * Overlays render over children content,
 * blocking any user interaction.
 */
const Overlay = (props) => {
  const {
    show,
    onClick,
    onKeyPress,
    isMobile,
    transparent,
    className,
    ...rest
  } = props;

  if (!show) {
    return null;
  }

  const overlayProps = {
    ...rest,
    onClick,
    role: 'presentation',
    onKeyPress: onKeyPress || onClick,
    className: classNames([
      'overlay',
      className,
      { transparent },
      { 'mobile-only': isMobile },
    ]),
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

  /** If should only render as transparent overlay */
  transparent: T.bool,

  /** Class name to attach */
  className: T.string,
};

Overlay.defaultProps = {
  onClick: undefined,
  onKeyPress: undefined,
  isMobile: false,
  transparent: false,
  className: '',
};

export default Overlay;
