import {
    GET_ALL_ORDERS, GET_ORDER, NUMBER_OF_ORDERS_BY_STATUS, GET_ORDERS_BY_CITY, GET_ORDER_BY_STATUS,
    GET_TOP_CITIES, GET_TOP_PRODUCTS, POST_ORDER, DELETE_ORDER, DELETE_ORDERS //I will check other types after I console all api
} from '../actionTypes';

export function allOrders(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_ORDERS: return data;
        case DELETE_ORDER: 
        const deletedOrders = state.filter(item => item.id !== data.id);
        return deletedOrders;
        default: return state;
    }
}

export function order(state = null, { type, data }) {
    switch (type) {
        case GET_ORDER: return data;
        default: return state;
    }
}

export function numberOfOrdersByStatus(state = null, { type, data }) {
    switch (type) {
        case NUMBER_OF_ORDERS_BY_STATUS: return data;
        default: return state;
    }
}

export function ordersByCity(state = null, { type, data }) {
    switch (type) {
        case GET_ORDERS_BY_CITY: return data;
        default: return state;
    }
}

export function ordersByStatus(state = null, { type, data }) {
    switch (type) {
        case GET_ORDER_BY_STATUS: return data;
        default: return state;
    }
}

export function topCities(state = null, { type, data }) {
    switch (type) {
        case GET_TOP_CITIES: return data;
        default: return state;
    }
}

export function topProducts(state = null, { type, data }) {
    switch (type) {
        case GET_TOP_PRODUCTS: return data;
        default: return state;
    }
}