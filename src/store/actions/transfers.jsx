import {
    GET_ALL_TRANSFERS, GET_SELECTED_TRANSFERS, GET_BALANCE_DETAILS, IS_LOGGED_IN, SEARCH_TRANSFERS, TOGGLE_ERROR_MODAL
} from '../actionTypes';
import axios from 'axios';
import moment from 'moment';

export const getAllTransfers = (limit, page) => async (dispatch) => {
    try {
        const data = await axios.get(`transfers/paginate/${limit}?page=${page}`);
        if (data.status === 200) {
            dispatch({ type: GET_ALL_TRANSFERS, data: data.data })
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const searchTransfers = (type, text) => async (dispatch) => {
    try {
        let url = '';
        if (type === 'amount') url = `/transfers/search/amount?amount=${parseInt(text)}`;
        if (type === 'date') {
            const day = moment(text).format('DD');
            const month = moment(text).format('MM');
            const year = moment(text).format('YYYY');
            url = `/transfers/search/date?day=${parseInt(day)}&month=${parseInt(month)}&year=${parseInt(year)}`;
        }
        const { data } = await axios.post(url);
        if (data.success) {
            dispatch({ type: SEARCH_TRANSFERS, data: data.data })
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getTransfer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/transfers/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_TRANSFERS, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getBalanceDetails = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/balance');
        if (data.success) {
            dispatch({ type: GET_BALANCE_DETAILS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}