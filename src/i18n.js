import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ru from './locales/ru';

const resources = {
    en: en,
    ru: ru
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources
    });

export default i18n;