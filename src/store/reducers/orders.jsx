import {
    GET_ALL_ORDERS, GET_ORDER, NUMBER_OF_ORDERS_BY_STATUS, GET_ORDERS_BY_CITY, GET_ORDER_BY_STATUS, GET_ALL_ORDERS_PAGINATED,
    GET_TOP_CITIES, GET_TOP_PRODUCTS, POST_ORDER, DELETE_ORDER, DELETE_ORDERS, PRINT_ONE_ORDER, SEARCH_ORDERS, PRINT_SELECTED_ORDERS,
    GET_ORDER_IN_MAP, SENT_VERIFICATION_CODE, POST_ORDER_BY_SHOP  //I will check other types after I console all api
} from '../actionTypes';

export function allOrders(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_ORDERS: return data;
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
        case GET_ORDER_BY_STATUS:
            data.forEach(item => item.checked = false);
            return data;
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
        case GET_TOP_PRODUCTS:
            return data;
        default: return state;
    }
}

export function printOrder(state = null, { type, data }) {
    switch (type) {
        case PRINT_ONE_ORDER: return data;
        case PRINT_SELECTED_ORDERS: return data;
        default: return state;
    }
}

const initialState = {
    hasNextPage: false,
    hasPrevPage: false,
    currentPage: 1,
    data: [],
    lastPage: []
}

export function ordersPaginated(state = initialState, { type, data }) {
    switch (type) {
        case GET_ALL_ORDERS_PAGINATED:
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
        case SEARCH_ORDERS:
            let isArray = Array.isArray(data);
            return {
                hasNextPage: false,
                hasPrevPage: false,
                currentPage: 1,
                data: isArray ? data : [data],
                lastPage: [1]
            }
        default: return state;
    }
}

export function orderPosted(state = false, { type, data }) {
    switch (type) {
        case POST_ORDER: return true;
        default: return false;
    }
}

export function deletedOrder(state = false, { type, data }) {
    switch (type) {
        case DELETE_ORDER: return data;
        default: return false;
    }
}

export function ordersByMap(state = [], { type, data }) {
    switch (type) {
        case GET_ORDER_IN_MAP: return data;
        default: return state;
    }
}

export function verification_code(state = false, { type, data }) {
    switch (type) {
        case SENT_VERIFICATION_CODE: return data;
        default: return state;
    }
}