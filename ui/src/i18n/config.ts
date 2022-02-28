import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './en/translations.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation,
    },
  },
});
