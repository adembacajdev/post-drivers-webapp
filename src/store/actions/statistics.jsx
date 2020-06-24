import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS, IS_LOGGED_IN } from '../actionTypes';
import axios from 'axios';

export const getDailyEarnings = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/statistics/earnings');
        if (data.success) {
            dispatch({ type: GET_DAILY_EARNINGS, data });
        }else if(data.code === 403){
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getDailyOrders = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/statistics/orders');
        if (data.success) {
            dispatch({ type: GET_DAILY_ORDERS, data });
        }else if(data.code === 403){
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}