import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import * as propUtils from '../../utils/propTypes';
import govLogo from '../../images/Ca-Gov-Logo-Gold.svg';

import A from '../A';
import Button from '../Button';

const UtilityHeader = ({ toggleSettingsOpen, contactLink, title }) => (
  <div className={'utility-header'}>
    <div className={'container'}>
      <div className={'group flex-row'}>
        <div className={'social-media-links'}>
          <div className={'header-cagov-logo'}>
            <a href={'http://www.ca.gov/'}>
              <span className={'sr-only'}>CA.gov</span>
              <img className={'pos-rel'} aria-hidden={'true'} src={govLogo} alt={'Ca Gov Logo'} />
            </a>
          </div>

          {
            title
              ? <div className={'header-title'}>{title}</div>
              : (
                <Link to={'/'}>
                  <span className={'ca-gov-icon-home'} aria-hidden={'true'} />
                  <span className={'sr-only'}>Home</span>
                </Link>
              )
          }
        </div>

        <div className={'settings-links'}>
          <A {...contactLink} />
          <Button
            aria-expanded={'false'}
            aria-controls={'siteSettings'}
            className={'btn-xs'}
            iconProps={{ name: 'gear' }}
            onClick={toggleSettingsOpen}
            text={'Settings'}
            variant={'primary'}
          />
        </div>
      </div>
    </div>
  </div>
);

UtilityHeader.propTypes = {
  toggleSettingsOpen: T.func.isRequired,
  contactLink: propUtils.contactLink.isRequired,
  title: T.string,
};

UtilityHeader.defaultProps = {
  title: null,
};

export default UtilityHeader;
