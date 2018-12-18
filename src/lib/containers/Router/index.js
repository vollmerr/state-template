import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { routeProp } from '../../utils/propTypes';

import * as actions from './actions';

import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

// main container for applications - handles routing and user settings
export class Router extends React.PureComponent {
  componentDidMount() {
    this.registerRouting();
  }

  componentWillReceiveProps(nextProps) {
    const { routes, updateRouting } = this.props;
    if (routes !== nextProps.routes) {
      updateRouting({ routes: nextProps.routes });
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

  render() {
    const { routes } = this.props;

    return routes.map(route => (
      <Route {...route} />
    ));
  }
}

Router.propTypes = {
  contactLink: T.string,
  routes: T.arrayOf(routeProp).isRequired,
  updateRouting: T.func.isRequired,
};

Router.defaultProps = {
  contactLink: '/help',
};

export const mapDispatchToProps = dispatch => ({
  updateRouting: props => dispatch(actions.updateRouting(props)),
});

const withRedux = connect(null, mapDispatchToProps);

export default withRedux(Router);
