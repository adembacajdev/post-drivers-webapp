import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS } from '../actionTypes';
import axios from 'axios';

export const getDailyEarnings = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/statistics/earnings');
        if (data.success) dispatch({ type: GET_DAILY_EARNINGS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getDailyOrders = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/statistics/orders');
        if (data.success) dispatch({ type: GET_DAILY_ORDERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}