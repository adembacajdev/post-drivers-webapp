import {
    GET_ALL_CUSTOMERS, GET_SELECTED_CUSTOMERS, GET_CUSTOMERS_ORDER, DELETE_CUSTOMER, DELETE_CUSTOMERS, GET_RECENT_CUSTOMERS
} from '../actionTypes';

export function allCustomers(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_CUSTOMERS: return data;
        default: return state;
    }
}

export function customer(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_CUSTOMERS: return data;
        default: return state;
    }
}

export function customerOrders(state = null, { type, data }) {
    switch (type) {
        case GET_CUSTOMERS_ORDER: return data;
        default: return state;
    }
}

export function recentCustomers(state = null, { type, data }) {
    switch (type) {
        case GET_RECENT_CUSTOMERS: return data;
        default: return state;
    }
}