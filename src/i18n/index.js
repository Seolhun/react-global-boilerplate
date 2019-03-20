import i18n from 'i18next';
// import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';

// import commonEn from './locales/en/common';
// import commonKo from './locales/ko/common';

import resources from './locales';

i18n
  // .use(XHR)
  .use(LanguageDetector)
  .use(I18nextProvider)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    ns: ['common'],
    defaultNS: ['common'],
    // // Using XHR public files
    // backend: {
    //   loadPath: '../locales/{{lng}}/{{ns}}.json',
    // },
    debug: process.env.NODE_ENV === 'development',

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
    resources,
  });
export default i18n;
