import React from 'react';

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
    className: `bpa__overlay ${isMobile && 'mobile-only'}`,
    ...rest,
  };

  return <div {...overlayProps} />;
};

export default Overlay;
