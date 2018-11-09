// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import './vendor';

import store from './store';
import i18n from './i18n';
import App from './container/App';
import './Main.scss';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('main'),
);
