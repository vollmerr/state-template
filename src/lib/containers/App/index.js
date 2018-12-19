import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { routeProp } from '../../utils/propTypes';

import Routing from '../Routing';
import Header from './Header';
import Footer from './Footer';

import odiLogo from '../../images/office-of-digital-innovation-logo.png';
import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

// main container for applications - handles routing and user settings
export class App extends React.Component {
  componentDidMount() {
    this.setSettings();
  }

  // set setttings user has set (in SettingsBar)
  setSettings = () => {
    document.body.style.zoom = Number(localStorage.getItem('zoom'));
    if (localStorage.getItem('highContrast')) {
      document.getElementsByTagName('html')[0].classList.add('high-contrast');
    }
  }

  render() {
    const { routes, router: Router, brandingLogo } = this.props;

    return (
      <Router>
        <>
          <Header brandingLogo={brandingLogo} />
          <Routing routes={routes} />
          <Footer />
        </>
      </Router>
    );
  }
}

App.propTypes = {
  router: T.node,
  routes: T.arrayOf(routeProp).isRequired,
  brandingLogo: T.string,
};

App.defaultProps = {
  router: HashRouter,
  brandingLogo: odiLogo,
};

const withRedux = connect();

export default withRedux(App);
