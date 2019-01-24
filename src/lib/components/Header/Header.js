import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

import * as propUtils from '../../utils/propTypes';
import odiLogo from '../../images/office-of-digital-innovation-logo.png';
import Overlay from '../Overlay';

import Branding from './Branding';
import MobileControls from './MobileControls';
import Navigation from './Navigation';
import Search from './Search';
import SettingsBar from './SettingsBar';
import UtilityHeader from './UtilityHeader';

/**
 * Renders a header that handles responsive viewports,
 * compacting on scroll, opening settings, and
 * generating navigation.
 */
class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCompact: false,
      isMobileOpen: false,
      isSettingsOpen: false,
    };
    this.scrollEvent = debounce(this.onScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);
    this.setSettings();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  // set setttings user has set (in SettingsBar)
  setSettings = () => {
    document.body.style.zoom = Number(localStorage.getItem('zoom'));
    if (localStorage.getItem('highContrast')) {
      document.getElementsByTagName('html')[0].classList.add('high-contrast');
    }
  }

  // handles compacting header when scrolled down
  onScroll = () => {
    const { isCompact } = this.state;
    const newIsCompact = window.scrollY > 130;

    if (isCompact !== newIsCompact) {
      this.setState({ isCompact: newIsCompact });
    }
  }

  // handles toggling if the mobile menu is open
  toggleMobileOpen = () => {
    const { isMobileOpen } = this.state;
    this.setState({ isMobileOpen: !isMobileOpen });
  }

  // handles toggling if the settings menu is open
  toggleSettingsOpen = () => {
    const { isSettingsOpen } = this.state;
    this.setState({ isSettingsOpen: !isSettingsOpen });
  }

  render() {
    const {
      fixed,
      align,
      brandingLogo,
      routes,
      contactLink,
    } = this.props;

    const {
      isCompact,
      isMobileOpen,
      isSettingsOpen,
    } = this.state;

    const filteredRoutes = routes.filter(x => !x.hidden);
    const cn = classNames([
      'global-header',
      { fixed },
      { compact: isCompact },
      align,
    ]);

    return (
      <>
        <header role={'banner'} className={cn}>
          <UtilityHeader
            toggleSettingsOpen={this.toggleSettingsOpen}
            contactLink={contactLink}
          />

          <SettingsBar
            toggleSettingsOpen={this.toggleSettingsOpen}
            isSettingsOpen={isSettingsOpen}
          />

          <Branding {...brandingLogo} />

          <MobileControls
            toggleMobileOpen={this.toggleMobileOpen}
            routes={filteredRoutes}
          />

          <div className={'navigation-search'}>
            <Navigation
              isMobileOpen={isMobileOpen}
              toggleMobileOpen={this.toggleMobileOpen}
              routes={filteredRoutes}
            />
            <div id={'head-search'} className={'search-container'}>
              <Search />
            </div>
          </div>


          <div className={'header-decoration'} />
        </header>

        <Overlay
          isMobile
          show={isMobileOpen}
          onClick={this.toggleMobileOpen}
        />
      </>
    );
  }
}

Header.propTypes = {
  /** Keeps header fixed to the top */
  fixed: T.bool,
  /** Aligns navigation items */
  align: T.oneOf(['center', 'left', 'right']),
  /** Branding logo */
  brandingLogo: propUtils.brandingLogo,
  /** Contact us link */
  contactLink: propUtils.contactLink,
  /** Routes for navigation items */
  routes: T.arrayOf(propUtils.route),
};

Header.defaultProps = {
  fixed: true,
  align: 'center',
  brandingLogo: {
    src: odiLogo,
    alt: 'Office of Digital Innovation logo',
    href: 'https://cdt.ca.gov/',
  },
  contactLink: {
    text: 'Contact Us',
    href: 'https://cdt.ca.gov/support/',
  },
  routes: [],
};

export default Header;
