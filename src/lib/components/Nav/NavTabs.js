import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import {
  Route, withRouter, Switch, Redirect,
} from 'react-router-dom';

import * as propUtils from '../../utils/propTypes';

import A from '../A';

/**
 * Renders a Bootstrap style nav tab
 */
const NavTabs = (props) => {
  const {
    className,
    defaultPath,
    location,
    match,
    routes,
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
          routes.filter((x) => !x.hidden).map((route) => {
            const to = `${match.url}${route.path}`;
            const active = location.pathname === to;
            const linkClass = classNames([
              'nav-link',
              { active },
            ]);

            return (
              <li key={route.key} role={'presentation'} className={'nav-item'}>
                <A to={to} className={linkClass}>{route.name}</A>
              </li>
            );
          })
        }
      </div>

      <Switch>
        {
          routes.map((route) => (
            <Route {...route} path={`${match.path}${route.path}`} />
          ))
        }
        <Redirect to={redirectPath} />
      </Switch>
    </>
  );
};

NavTabs.propTypes = {
  /** additional class name to attach to top level div */
  className: T.string,

  /** Default path to redirect to */
  defaultPath: T.string,

  /** location objected - supplied by withRouter */
  location: T.shape({ pathname: T.string.isRequired }).isRequired,

  /** match objected - supplied by withRouter */
  match: T.shape({
    url: T.string.isRequired,
    path: T.string.isRequired,
  }).isRequired,

  /** routes to render and display as nav tabs */
  routes: T.arrayOf(propUtils.route).isRequired,

  /** context - supplied by withRouter */
  staticContext: T.any, // eslint-disable-line
};

NavTabs.defaultProps = {
  className: '',
  defaultPath: '',
};

export default withRouter(NavTabs);
