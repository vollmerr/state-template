import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Overlay from '../../../components/Overlay';
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
    const { isMobileOpen, isSettingsOpen, routes } = this.props;

    return (
      <header role="banner" id="header" className="global-header fixed">
        <div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

        <LocationBar />
        <UtilityHeader toggleSettingsOpen={this.toggleSettingsOpen} />
        <SettingsBar isSettingsOpen={isSettingsOpen} toggleSettingsOpen={this.toggleSettingsOpen} />
        <Branding />
        <MobileControls toggleMobileOpen={this.toggleMobileOpen} />

        <div className="navigation-search">
          <Navigation
            isMobileOpen={isMobileOpen}
            toggleMobileOpen={this.toggleMobileOpen}
            routes={routes}
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

export const mapStateToProps = createStructuredSelector({
  isMobileOpen: selectors.getIsMobileOpen(),
  isSettingsOpen: selectors.getIsSettingsOpen(),
  routes: selectors.getRoutes(),
});

export const mapDispatchToProps = dispatch => ({
  updateDisplay: props => dispatch(actions.updateDisplay(props)),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default withRedux(Header);
