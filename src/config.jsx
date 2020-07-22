
let host = window.location.host;
let parts = host.split(".");

const config = {
    baseURL: `https://${parts[0]}.strikecourier.com/api`,
    addOrder: 'http://localhost:3000/add-order' //this should be fixed
}

export default config;