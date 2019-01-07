import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import {
  Route, withRouter, Switch, Redirect,
} from 'react-router-dom';

import A from '../A';

/**
 * Renders a Bootstrap style nav tab
 */
const NavTabs = (props) => {
  const {
    match,
    location,
    routes,
    className,
    defaultPath,
    staticContext, // pull out so not passed on
    ...rest
  } = props;

  const cn = classNames([
    'nav nav-tabs m-b-md',
    className,
  ]);

  // redirect to `defaultPath` route, or base path if none provided
  const redirectPath = defaultPath ? `${match.path}${defaultPath}` : match.path;

  return (
    <>
      <div className={cn} {...rest}>
        {
          routes.map((route) => {
            const to = `${match.url}${route.path}`;
            const isActive = location.pathname === to;
            const activeClass = isActive ? 'active' : '';

            return (
              <li key={route.key} role={'presentation'} className={activeClass}>
                <A to={to}>{route.name}</A>
              </li>
            );
          })
        }
      </div>

      <Switch>
        {
          routes.map(route => (
            <Route {...route} path={`${match.path}${route.path}`} />
          ))
        }
        <Redirect to={redirectPath} />
      </Switch>
    </>
  );
};

NavTabs.propTypes = {
  /** match objected supplied by withRouter */
  match: T.object.isRequired,
  /** location objected supplied by withRouter */
  location: T.object.isRequired,
  /** routes to render and display as nav tabs */
  routes: T.array.isRequired,
  /** additional class name to attach to top level div */
  className: T.string,
  /** Default path to redirect to */
  defaultPath: T.string,
};

NavTabs.defaultProps = {
  className: '',
  defaultPath: '',
};

export default withRouter(NavTabs);
