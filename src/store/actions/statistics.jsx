import { GET_DAILY_EARNINGS, GET_DAILY_ORDERS, IS_LOGGED_IN, TOGGLE_ERROR_MODAL, GET_CITIES_STATISTICS, LOG_OUT, CLEAR_NOTIFICATION } from '../actionTypes';
import axios from 'axios';

export const getDailyEarnings = (month) => async (dispatch) => {
    try {
        let uri = '';
        if(month) uri = `/statistics/earnings?months=${month}`;
        else uri = '/statistics/earnings'
        const { data } = await axios.get(uri);
        if (data.success) {
            dispatch({ type: GET_DAILY_EARNINGS, data: data.data });
        }else if(data.code === 403){
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        if (e?.response?.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e);
    }
}

export const getDailyOrders = (month) => async (dispatch) => {
    try {
        let uri = '';
        if(month) uri = `/statistics/orders?months=${month}`;
        else uri = '/statistics/orders'
        const { data } = await axios.get(uri);
        if (data.success) {
            dispatch({ type: GET_DAILY_ORDERS, data: data.data });
        }else if(data.code === 403){
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        if (e?.response?.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e);
    }
}

export const getDailyCities = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/statistics/cities');
        if (data.success) {
            dispatch({ type: GET_CITIES_STATISTICS, data: data.data });
        }else if(data.code === 403){
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        if (e?.response?.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e);
    }
}