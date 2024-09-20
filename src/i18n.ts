import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('language') || 'en';
const translationVersion = 'v1.5';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'en',
    // debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json?v=${translationVersion}`
    },
    ns: ['translation', 'help', 'rewards'],
    fallbackNS: 'translation'
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
