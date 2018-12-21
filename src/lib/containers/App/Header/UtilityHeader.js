import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import A from '../../../components/A';
import govLogo from '../../../images/Ca-Gov-Logo-Gold.svg';

const UtilityHeader = ({ toggleSettingsOpen, contactLink }) => (
  <div className="utility-header">
    <div className="container">
      <div className="group">
        <div className="half">
          <ul className="utility-links social-media-links">
            <li>
              <div className="header-cagov-logo">
                <a href="http://www.ca.gov/"><img src={govLogo} alt="Ca Gov Logo" /></a>
              </div>
            </li>
            <li>
              <Link to={'/'}>
                <span className="ca-gov-icon-home" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {/* <li><a className="ca-gov-icon-facebook" title="Share via Facebook">
            <span className="sr-only">Facebook</span></a></li>
            <li><a className="ca-gov-icon-twitter" title="Share via Twitter">
            <span className="sr-only">Twitter</span></a></li>
            <li><a className="ca-gov-icon-google-plus" title="Share via Google+">
            <span className="sr-only">Google+</span></a></li>
            <li><a className="ca-gov-icon-email" title="Share via email">
            <span className="sr-only">Email</span></a></li> */}
          </ul>
        </div>

        <div className="half settings-links p-t-sm">
          <ul className="utility-links">
            <li>
              <A {...contactLink} />
            </li>
            <li>
              <button onClick={toggleSettingsOpen} type={'button'} className="btn btn-xs btn-primary" aria-expanded="false" aria-controls="siteSettings">
                <span className="ca-gov-icon-gear" aria-hidden="true" />
                {' '}
Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

UtilityHeader.propTypes = {
  toggleSettingsOpen: T.func.isRequired,
  contactLink: T.shape({
    text: T.string.isRequired,
    href: T.string.isRequired,
  }).isRequired,
};

export default UtilityHeader;
