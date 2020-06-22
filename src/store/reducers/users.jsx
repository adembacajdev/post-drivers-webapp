import {
    GET_ALL_USERS, GET_SELECTED_USER, POST_USER, UPDATE_USER, DELETE_USER
} from '../actionTypes';

export function allUsers(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_USERS: return data;
        default: return state;
    }
}

export function user(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_USER: return data;
        default: return state;
    }
}