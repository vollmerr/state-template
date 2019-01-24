import React from 'react';
import T from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as propUtils from '../../utils/propTypes';

export class Routing extends React.PureComponent {
  render() {
    const { routes, redirect } = this.props;

    return (
      <Switch>
        {
          routes.map(route => (
            <Route {...route} />
          ))
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

export default Routing;
