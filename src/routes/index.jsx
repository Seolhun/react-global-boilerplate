import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { getCookieByName } from '../utils';
import { TOKENS } from '../constant';

import schema from './schema';

const redirectLink = path => (
  <Redirect to={path} />
);

const renderLink = (route, depth) => {
  if (!route.isLink) {
    return null;
  }

  if (route.depth === depth || route.depth === 0) {
    return (
      <div
        key={route.path}
        className={route.className}
      >
        <Link
          className="router"
          to={route.path}
        >
          {route.label}
        </Link>
      </div>
    );
  }
  return null;
};

const renderRoute = (route, depth) => {
  const auth = getCookieByName(TOKENS.AUTH);
  if (!auth) {
    redirectLink('/');
  }
  if (route.depth === depth || route.depth === 0) {
    return (
      <Route
        key={route.label}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  }
  return null;
};

const Routes = ({ depth, routes }) => {
  Routes.propTypes = {
    depth: PropTypes.number.isRequired,
    routes: PropTypes.array.isRequired,
  };

  return (
    <div>
      <Switch>
        {routes.map(route => renderRoute(route, depth))}
      </Switch>
    </div>
  );
};

export {
  redirectLink,
  renderLink,
  renderRoute,
  schema,
};

export default Routes;
