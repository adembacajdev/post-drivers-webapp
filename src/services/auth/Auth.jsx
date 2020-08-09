import i18n from '../locales/i18n';

const Auth = {
    getToken: () => {
        const token = localStorage.getItem('token');
        return token ?? false;
    },
    setToken: (token) => {
        localStorage.setItem('token', token);
    },
    getShopName: () => {
        const shopName = localStorage.getItem('shopName');
        return shopName ?? null;
    },
    setLanguage: () => {
        const language = localStorage.getItem('language');
        const hasLang = checkLang(language)
        function checkLang(lang){
            return lang ?? false
        }
        if (hasLang) {
            i18n.changeLanguage(language)
        } else {
            localStorage.setItem('language', 'al')
            i18n.changeLanguage('al')
        }
    },
    getLanguage: () => {
        const language = localStorage.getItem('language');
        return language ?? 'al';
    },
    checkIsAdmin: () => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== undefined || isAdmin !== 'undefined' || isAdmin !== null || isAdmin !== 'null') {
            if (isAdmin === '1') { return true; }
            else { return false; }
        } else { return false; }
    },
    getFirstName: () => {
        const firstName = localStorage.getItem('firstName');
        return firstName ?? null;
    },
    getLastName: () => {
        const lastName = localStorage.getItem('lastName');
        return lastName ?? null
    },
    getShopName: () => {
        const shopName = localStorage.getItem('shopName');
        return shopName ?? null;
    },
    getCurrentBalance: () => {
        const getCurrentBalance = localStorage.getItem('currentBalance');
        return getCurrentBalance ?? '-//-';
    },
    getOnePrintOrder: () => {
        const printOne = localStorage.getItem('printOne');
        return printOne ?? false;
    },
    getMultiplePrintOrder: () => {
        const printMultiple = localStorage.getItem('printMultiple');
        return printMultiple ?? false;
    },
    getNotifications: () => {
        const previousNotifications = localStorage.getItem('notifications');
        const parsedNotifications = JSON.parse(previousNotifications);
        return parsedNotifications ?? null;
    }
}

export default Auth;