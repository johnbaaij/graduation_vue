/* eslint-disable camelcase */ // Do not remove this comment. This is a requirement by i18n
import { createI18n } from 'vue-i18n';
import en_us from './locales/en-US.json';
import nl_nl from './locales/nl-NL.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en_us',
  globalInjection: true, // this makes it available in every component
  fallbackLocale: 'en_us', // this is the default language
  messages: {
    en_us,
    nl_nl,
  },
});
export default i18n;
