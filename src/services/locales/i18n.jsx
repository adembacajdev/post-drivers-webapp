import i18next from 'i18next';
import en from './languages/en.json';
import al from './languages/al.json';
import { getLocale } from './getlocale';

let userLang = getLocale();
i18next.init({
    interpolation: { escapeValue: false },
    lng: userLang,
    resources: {
        en: { translation: en },
        al: { translation: al }
    }
});

export default i18next;
