import React from 'react';
import T from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';

import * as propUtils from '../../utils/propTypes';
import ErrorBoundary from '../ErrorBoundary';

export class Routing extends React.PureComponent {
  renderRoute = (route) => {
    const { component: C, ...rest } = route;
    const render = props => <ErrorBoundary><C {...props} /></ErrorBoundary>;

    return <Route render={render} {...rest} />;
  }

  render() {
    const { routes, redirect } = this.props;

    return (
      <Switch>
        {
          routes.map(route => this.renderRoute(route))
        }
        {redirect && <Redirect to={redirect} />}
      </Switch>
    );
  }
}

Routing.propTypes = {
  /** Routes to render */
  routes: T.arrayOf(propUtils.route),

  /** Redirect if no matching path */
  redirect: T.string,
};

Routing.defaultProps = {
  routes: [],
  redirect: null,
};

export default withRouter(Routing);
