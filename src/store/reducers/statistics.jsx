import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS } from '../actionTypes';

export function dailyEarnings(state = null, { type, data }) {
    switch (type) {
        case GET_DAILY_EARNINGS: return data;
        default: return state;
    }
}

export function dailyOrders(state = null, { type, data }) {
    switch (type) {
        case GET_DAILY_ORDERS: return data;
        default: return state;
    }
}