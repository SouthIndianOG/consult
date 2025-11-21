import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { kn } from './locales/kn';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            kn: kn
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
