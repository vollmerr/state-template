import React from 'react';
import T from 'prop-types';

const BannerPrimary = ({ src }) => (
  <div
    className={'header-primary-banner hidden-print hidden-xs'}
    style={{
      backgroundImage: `url(${src})`,
      height: '450px',
    }}
    data-test={'banner'}
  />
);

BannerPrimary.propTypes = {
  src: T.string.isRequired,
};

export default BannerPrimary;
