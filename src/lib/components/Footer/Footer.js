import React from 'react';

import * as propUtils from '../../utils/propTypes';
import A from '../A';

// TODO: pull from config (and config link) / allow custom...
const footerLinks = [
  {
    href: 'http://www.ca.gov/Use',
    text: 'Conditions of Use',
  }, {
    href: 'http://www.ca.gov/Privacy',
    text: 'Privacy Policy',
  }, {
    href: 'http://www.ca.gov/Accessibility',
    text: 'Accessibility',
  },
];

// TODO: pull from config / allow custom...
const socialLinks = [
  {
    href: 'https://www.flickr.com/groups/californiagovernment',
    iconProps: { name: 'flickr', srOnly: 'Flickr' },
  }, {
    href: 'https://www.pinterest.com/cagovernment',
    iconProps: { name: 'pinterest', srOnly: 'Pinterest' },
  }, {
    href: 'https://twitter.com/cagovernment',
    iconProps: { name: 'twitter', srOnly: 'Twitter' },
  }, {
    href: 'https://www.youtube.com/user/californiagovernment',
    iconProps: { name: 'youtube', srOnly: 'YouTube' },
  },
];

/**
 * Renders a footer with links to policies and social media.
 * Additionally renders a copyright for the current year and
 * a version number as specified by the `REACT_APP_VERSION` variable
 *
 * To retrieve the variable from the package.json's version use
 * `REACT_APP_VERSION=$npm_package_version`
 * in the .env file
 * */
class Footer extends React.Component {
  getCopyRight = () => `Copyright \u00A9 ${new Date().getFullYear()}`

  getVersion = () => (process.env.REACT_APP_VERSION ? `v${process.env.REACT_APP_VERSION}` : '')

  render() {
    const { contactLink } = this.props;

    return (
      <>
        <footer className={'global-footer'}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'three-quarters'}>
                <ul className={'footer-links'}>
                  {
                    footerLinks.map((link) => (
                      <li key={link.href}><A {...link} /></li>
                    ))
                  }
                  <li><A {...contactLink} /></li>
                </ul>
              </div>
              <div className={'quarter text-right'}>
                <ul className={'socialsharer-container'}>
                  {
                    socialLinks.map((link) => (
                      <li key={link.href}><A {...link} /></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className={'copyright'}>
            <div className={'container d-flex justify-content-between'}>
              <span>{this.getCopyRight()}</span>
              <span>{this.getVersion()}</span>
            </div>
          </div>
        </footer>

        <div className={'decoration-last'}>&nbsp;</div>
      </>
    );
  }
}

Footer.propTypes = {
  /** Link to use for 'contact us' link */
  contactLink: propUtils.contactLink.isRequired,
};

export default Footer;
