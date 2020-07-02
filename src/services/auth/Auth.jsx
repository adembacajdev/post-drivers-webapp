import i18n from '../locales/i18n';

const Auth = {
    getToken: () => {
        const token = localStorage.getItem('token');
        if (token == null || token == undefined || token == 'null' || token == 'undefined') {
            return false;
        }
        else return token;
    },
    setToken: (token) => {
        localStorage.setItem('token', token);
    },
    getShopName: () => {
        const shopName = localStorage.getItem('shopName');
        if (shopName == null || shopName == undefined || shopName == 'null' || shopName == 'undefined') {
            return i18n.t('navbar.onlineShop');
        } else return shopName;
    },
    getCurrentBalance: () => {
        let defaultValue = '-//-';
        const currentBalance = localStorage.getItem('currentBalance');
        if (currentBalance == null || currentBalance == undefined || currentBalance == 'null' || currentBalance == 'undefined') {
            return defaultValue;
        } else return currentBalance;
    },
    setLanguage: () => {
        const language = localStorage.getItem('language');
        if (language !== null || language !== 'null' || language !== undefined || language !== 'undefined') {
            i18n.changeLanguage(language)
        } else {
            localStorage.setItem('language', 'en')
            i18n.changeLanguage('en')
        }
    },
    getLanguage: () => {
        const language = localStorage.getItem('language');
        if (language !== null || language !== 'null' || language !== undefined || language !== 'undefined') {
            return language;
        } else {
            const en = 'en'
            return en;
        }
    },
    checkIsAdmin: () => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== undefined || isAdmin !== 'undefined' || isAdmin !== null || isAdmin !== 'null') {
            if (isAdmin === '1') {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
    }
}

export default Auth;