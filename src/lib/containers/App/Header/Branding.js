import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const Branding = ({ src, alt }) => (
  <div className="branding">
    <div className="header-organization-banner">
      <Link to={'/'}>
        <img src={src} alt={alt} />
      </Link>
    </div>
  </div>
);

Branding.propTypes = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
};

export default Branding;
