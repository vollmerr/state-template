import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import * as actions from './actions';

// main container for applications - handles routing and user settings
export class StateTemplate extends React.PureComponent {
  componentDidMount() {
    this.setSettings();
    this.registerRouting();
  }

  getRoutes = () => {
    const { routes } = this.props;
    return routes.map(route => (
      <Route {...route} />
    ));
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
    const { updateRouting, routes } = this.props;
    // update store with routes and current pages hash
    updateRouting({
      routes,
      hash: window.location.hash.replace('#', ''),
    });
    // register for future changes and clear errors on page change
    window.addEventListener('hashchange', (event) => {
      const hash = event.newURL.replace(/^[^#]*#/, '');
      updateRouting({ hash });
    });
  }

  render() {
    return (
      <HashRouter>
        <>
          <Header />
          <div id="main-content" className="main-content">
            <div className="section">
              <main className="main-primary">
                {this.getRoutes()}
              </main>
            </div>
          </div>
          <Footer />
        </>
      </HashRouter>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateRouting: props => dispatch(actions.updateRouting(props)),
});

const withRedux = connect(null, mapDispatchToProps);

export default withRedux(StateTemplate);
