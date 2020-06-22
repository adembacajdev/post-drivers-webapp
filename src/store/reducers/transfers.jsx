import {
    GET_ALL_TRANSFERS, GET_SELECTED_TRANSFERS, GET_BALANCE_DETAILS
} from '../actionTypes';

export function allTransfers(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_TRANSFERS: return data;
        default: return state;
    }
}

export function transfer(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_TRANSFERS: return data;
        default: return state;
    }
}

export function balanceDetails(state = null, { type, data }) {
    switch (type) {
        case GET_BALANCE_DETAILS: return data;
        default: return state;
    }
}