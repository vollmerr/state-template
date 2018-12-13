import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import { routeProp } from '../../utils/propTypes';

import Header from './Header';
import Footer from './Footer';
import * as actions from './actions';

import odiLogo from '../../images/office-of-digital-innovation-logo.png';
import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

// main container for applications - handles routing and user settings
export class App extends React.PureComponent {
  componentDidMount() {
    this.setSettings();
    this.registerRouting();
  }

  // set setttings user has set (in SettingsBar)
  setSettings = () => {
    document.body.style.zoom = Number(localStorage.getItem('zoom'));
    if (localStorage.getItem('highContrast')) {
      document.getElementsByTagName('html')[0].classList.add('high-contrast');
    }
  }

  // register routes in redux for navigation and
  // handle updating on change
  registerRouting = () => {
    const { updateRouting, routes, contactLink } = this.props;
    // update store with routes and current pages hash
    updateRouting({
      routes,
      contactLink,
      hash: window.location.hash.replace('#', ''),
    });
    // register for future changes and clear errors on page change
    window.addEventListener('hashchange', (event) => {
      const hash = event.newURL.replace(/^[^#]*#/, '');
      updateRouting({ hash });
    });
  }

  renderRoutes = () => {
    const { routes } = this.props;
    return routes.map(route => (
      <Route {...route} />
    ));
  }

  render() {
    const { brandingLogo } = this.props;

    return (
      <HashRouter>
        <>
          <Header brandingLogo={brandingLogo} />
          {this.renderRoutes()}
          <Footer />
        </>
      </HashRouter>
    );
  }
}

App.propTypes = {
  contactLink: T.string,
  routes: T.arrayOf(routeProp).isRequired,
  updateRouting: T.func.isRequired,
  brandingLogo: T.string,
};

App.defaultProps = {
  contactLink: '/help',
  brandingLogo: odiLogo,
};

export const mapDispatchToProps = dispatch => ({
  updateRouting: props => dispatch(actions.updateRouting(props)),
});

const withRedux = connect(null, mapDispatchToProps);

export default withRedux(App);
