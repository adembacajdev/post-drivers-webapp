import languages from './config';
let cache = { locale: undefined };

export function initLocale() {
    cache.locale = guessLocale();
}

export function getLocale() {
    if (!cache.locale) {
        initLocale();
    }
    return cache.locale;
}

function guessLocale() {
    let userLang = (navigator && navigator.language) || (navigator && navigator.userLanguage);
    let locale = userLang.split('-')[0]
    let checkLang = languages.find(lang => (lang === locale))
    return checkLang
}
