import { LOG_IN, LOG_OUT, GET_USER, RESET_PASSWORD } from '../actionTypes';

export function loggedIn(state = null, { type, data }) {
    switch (type) {
        case LOG_IN: return data;
        case LOG_OUT: return false;
        default: return state
    }
}

export function user(state = null, { type, data }) {
    switch (type) {
        case GET_USER: return data;
        default: return state;
    }
}

export function newPassword(state = null, { type, data }) {
    switch (type) {
        case RESET_PASSWORD: return data;
        default: return state;
    }
}