import { createI18n } from 'vue-i18n';
import tr from './locales/tr.json';
import en from './locales/en.json';

const i18n = createI18n({
  legacy: false,
  locale: 'TR',
  fallbackLocale: 'TR',
  messages: {
    TR: tr,
    EN: en
  }
});

export default i18n;
