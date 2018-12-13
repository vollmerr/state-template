import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const Branding = ({ src }) => (
  <div className="branding">
    <div className="header-organization-banner">
      <Link to={'/'}>
        <img src={src} alt="Office of Digital Innovation Logo" />
      </Link>
    </div>
  </div>
);

Branding.propTypes = {
  src: T.string.isRequired,
};

export default Branding;
