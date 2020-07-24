
let host = window.location.host;
let parts = host.split(".");

const config = {
    baseURL: `https://benishop.strikecourier.com/api`,
    addOrder: 'http://localhost:3000/add-order' //this should be fixed
}

export default config;