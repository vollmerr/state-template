import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';

import { routeProp } from '../../utils/propTypes';

import * as routerActions from '../Router/actions';
import Router from '../Router';
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
    const { routes, brandingLogo } = this.props;

    return (
      <>
        <Header brandingLogo={brandingLogo} />
        <Router routes={routes} />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  routes: T.arrayOf(routeProp).isRequired,
  brandingLogo: T.string,
};

App.defaultProps = {
  brandingLogo: odiLogo,
};

export const mapDispatchToProps = dispatch => ({
  updateRouting: props => dispatch(routerActions.updateRouting(props)),
});

const withRedux = connect(null, mapDispatchToProps);

export default withRedux(App);
