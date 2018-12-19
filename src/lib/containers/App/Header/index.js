import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Overlay from '../../../components/Overlay';
import { routeProp } from '../../../utils/propTypes';
import * as routerSelectors from '../../Routing/selectors';
import * as actions from '../actions';
import * as selectors from '../selectors';

import Branding from './Branding';
import LocationBar from './LocationBar';
import MobileControls from './MobileControls';
import Navigation from './Navigation';
import Search from './Search';
import SettingsBar from './SettingsBar';
import UtilityHeader from './UtilityHeader';

class Header extends React.PureComponent {
  toggleMobileOpen = () => {
    const { isMobileOpen, updateDisplay } = this.props;
    updateDisplay({ isMobileOpen: !isMobileOpen });
  }

  toggleSettingsOpen = () => {
    const { isSettingsOpen, updateDisplay } = this.props;
    updateDisplay({ isSettingsOpen: !isSettingsOpen });
  }

  render() {
    const {
      isMobileOpen, isSettingsOpen, routes, contactLink, brandingLogo,
    } = this.props;

    const filteredRoutes = routes.filter(x => !x.hidden);

    return (
      <header role="banner" id="header" className="global-header fixed">
        <div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

        <LocationBar />
        <UtilityHeader toggleSettingsOpen={this.toggleSettingsOpen} contactLink={contactLink} />
        <SettingsBar
          isSettingsOpen={isSettingsOpen}
          toggleSettingsOpen={this.toggleSettingsOpen}
        />
        <Branding src={brandingLogo} />
        <MobileControls toggleMobileOpen={this.toggleMobileOpen} routes={filteredRoutes} />

        <div className="navigation-search">
          <Navigation
            isMobileOpen={isMobileOpen}
            toggleMobileOpen={this.toggleMobileOpen}
            routes={filteredRoutes}
          />
          <div id="head-search" className="search-container">
            <Search />
          </div>
        </div>

        <Overlay show={isMobileOpen} onClick={this.toggleMobileOpen} isMobile />

        <div className="header-decoration" />
      </header>
    );
  }
}

Header.propTypes = {
  brandingLogo: T.string.isRequired,
  isMobileOpen: T.bool.isRequired,
  isSettingsOpen: T.bool.isRequired,
  routes: T.arrayOf(routeProp).isRequired,
  contactLink: T.string.isRequired,
  updateDisplay: T.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  isMobileOpen: selectors.getIsMobileOpen(),
  isSettingsOpen: selectors.getIsSettingsOpen(),
  routes: routerSelectors.getRoutes(),
  contactLink: routerSelectors.getContactLink(),
});

export const mapDispatchToProps = dispatch => ({
  updateDisplay: props => dispatch(actions.updateDisplay(props)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(Header);
