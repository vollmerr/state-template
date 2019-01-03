import React from 'react';
import T from 'prop-types';
import { HashRouter } from 'react-router-dom';

import { routeProp } from '../../utils/propTypes';
import StatusMessage from '../Status/StatusMessage';

import Routing from '../Routing';
import Header from './Header';
import Footer from './Footer';

import odiLogo from '../../images/office-of-digital-innovation-logo.png';
import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

/**
 * This container handles updating user setttings, rendering
 * the header and footer, and routing. This container is the
 * default export fhe project, and the main entry point of any
 * application that is using this project.
 */
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
    const {
      routes, router: Router, brandingLogo, fixedHeader, contactLink,
    } = this.props;

    return (
      <Router>
        <>
          <Header brandingLogo={brandingLogo} fixed={fixedHeader} contactLink={contactLink} />
          <Routing routes={routes} />
          <Footer contactLink={contactLink} />
          <StatusMessage />
        </>
      </Router>
    );
  }
}

App.propTypes = {
  router: T.func,
  routes: T.arrayOf(routeProp).isRequired,
  brandingLogo: T.shape({
    src: T.string.isRequired,
    alt: T.string.isRequired,
  }),
  contactLink: T.shape({
    text: T.string.isRequired,
    href: T.string.isRequired,
  }),
  fixedHeader: T.bool,
};

App.defaultProps = {
  router: HashRouter,
  brandingLogo: {
    src: odiLogo,
    alt: 'Office of Digital Innovation logo',
    href: 'https://cdt.ca.gov/',
  },
  contactLink: {
    text: 'Contact Us',
    href: 'https://cdt.ca.gov/support/',
  },
  fixedHeader: true,
};

export default App;
