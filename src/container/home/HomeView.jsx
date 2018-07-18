import React from 'react';

import { Header, Sidebar } from '../../component/layout';

import { schema } from '../../routes';

const HomeView = () => (
  <div className="container">
    <div className="row">
      <header className="col-sm-12">
        <Header depth={1} routes={schema} />
      </header>
      <aside className="col-sm-2">
        <Sidebar />
      </aside>
    </div>
  </div>
);

export default HomeView;
