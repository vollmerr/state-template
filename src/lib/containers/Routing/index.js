import React from 'react';
import T from 'prop-types';
import {
  withRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { routeProp } from '../../utils/propTypes';

import * as actions from './actions';

import '../../style/core/css/cagov.core.css';
import '../../style/style.scss';

// main container for applications - handles routing and user settings
export class Routing extends React.PureComponent {
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
    // update store with routes for use throughout the app
    updateRouting({ routes, contactLink });
  }

  render() {
    const { routes } = this.props;

    return (
      <Switch>
        {
          routes.map(route => (
            <Route {...route} />
          ))
        }
        <Redirect to={'/'} />
      </Switch>
    );
  }
}

Routing.propTypes = {
  contactLink: T.string,
  routes: T.arrayOf(routeProp).isRequired,
  updateRouting: T.func.isRequired,
};

Routing.defaultProps = {
  contactLink: '/help',
};

export const mapDispatchToProps = dispatch => ({
  updateRouting: props => dispatch(actions.updateRouting(props)),
});

const withRedux = connect(null, mapDispatchToProps)(Routing);
const withRouting = withRouter(withRedux);

export default withRouting;