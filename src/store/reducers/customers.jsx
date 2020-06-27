import {
    GET_ALL_CUSTOMERS, GET_SELECTED_CUSTOMERS, GET_CUSTOMERS_ORDER, DELETE_CUSTOMER, DELETE_CUSTOMERS, GET_RECENT_CUSTOMERS,
    SEARCH_CUSTOMERS
} from '../actionTypes';

const initialState = {
    hasNextPage: false,
    hasPrevPage: false,
    currentPage: 1,
    data: [],
    lastPage: []
}

export function allCustomers(state = initialState, { type, data }) {
    switch (type) {
        case GET_ALL_CUSTOMERS:
            let lastPages = [];
            for (var i = 0; i < (data.meta && data.meta.last_page); i++) {
                lastPages.push(i + 1);
            }
            data.data.forEach(item => item.checked = false);
            return {
                hasNextPage: data.links && data.links.next !== null,
                hasPrevPage: data.links && data.links.prev !== null,
                currentPage: data.meta && data.meta.current_page,
                data: data && data.data,
                lastPage: lastPages
            }
        case SEARCH_CUSTOMERS:
            return {
                hasNextPage: false,
                hasPrevPage: false,
                currentPage: 1,
                data: data,
                lastPage: [1]
            }
        case DELETE_CUSTOMER:
            const { id } = data
            const newCustomers = state.data.filter(item => item.id !== id);
            return {...state, data: newCustomers};
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