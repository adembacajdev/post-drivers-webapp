import React from 'react';

const Auth = {
    getToken: () => {
        const token = localStorage.getItem('token');
        if(token == null || token == undefined || token == 'null' || token == undefined){
            return false;
        }
        else return token;
    },
    setToken: (token) => {
        localStorage.setItem('token', token);
    }
}

export default Auth;