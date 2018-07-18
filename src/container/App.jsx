import React, { Fragment } from 'react';

import HomeView from './home';

import Routes, { schema } from '../routes';

const App = () => (
  <Fragment>
    <HomeView />
    <main>
      <Routes depth={1} routes={schema} />
    </main>
  </Fragment>
);

export default App;
