import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { renderLink } from '../../routes';

const Header = (props) => {
  const { depth, routes } = props;
  return (
    <Fragment>
      <h2>
        Header
      </h2>
      <header className="App-header">
        <h1 className="App-title">
          Welcome to React By Seolhun
        </h1>
      </header>
      <div className="container">
        <div className="row">
          {routes.map(route => renderLink(route, depth))}
        </div>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  depth: PropTypes.number.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Header;
