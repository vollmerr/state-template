import React from 'react';
import T from 'prop-types';

const BannerPrimary = ({ src }) => (
  <div
    className={'header-primary-banner hidden-print'}
    style={{
      backgroundImage: `url(${src})`,
      height: '450px',
    }}
  />
);

BannerPrimary.propTypes = {
  src: T.string.isRequired,
};

export default BannerPrimary;
