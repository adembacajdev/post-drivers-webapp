import i18n from '../locales/i18n';

const Auth = {
    getToken: () => {
        const token = localStorage.getItem('token');
        if(token == null || token == undefined || token == 'null' || token == 'undefined'){
            return false;
        }
        else return token;
    },
    setToken: (token) => {
        localStorage.setItem('token', token);
    },
    getShopName: () => {
        const shopName = localStorage.getItem('shopName');
        if(shopName == null || shopName == undefined || shopName == 'null' || shopName == 'undefined'){
            return i18n.t('navbar.onlineShop');
        }else return shopName;
    },
    getCurrentBalance: () => {
        let defaultValue = '-//-';
        const currentBalance = localStorage.getItem('currentBalance');
        if(currentBalance == null || currentBalance == undefined || currentBalance == 'null' || currentBalance == 'undefined'){
            return defaultValue;
        }else return currentBalance;
    },
}

export default Auth;