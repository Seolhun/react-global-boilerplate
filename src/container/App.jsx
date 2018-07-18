import React, { Fragment } from 'react';

import { Header, Sidebar } from '../component/layout';
import Routes, { schema } from '../routes';


const App = () => (
  <Fragment>
    <div className="row">
      <aside className="col-sm-2">
        <Sidebar />
      </aside>
      <header className="col-sm-8">
        <Header depth={1} routes={schema} />
      </header>
    </div>
    <div>
      <main>
        <Routes depth={1} routes={schema} />
      </main>
    </div>
  </Fragment>
);

export default App;
