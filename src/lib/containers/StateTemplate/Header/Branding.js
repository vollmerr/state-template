import React from 'react';
import { Link } from 'react-router-dom';

import odiLogo from '../../../images/office-of-digital-innovation-logo.png';

const Branding = () => (
  <div className="branding">
    <div className="header-organization-banner">
      <Link to={'/'}>
        <img src={odiLogo} alt="Office of Digital Innovation Logo" />
      </Link>
    </div>
  </div>
);

export default Branding;
