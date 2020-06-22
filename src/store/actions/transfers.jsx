import {
    GET_ALL_TRANSFERS, GET_SELECTED_TRANSFERS, GET_BALANCE_DETAILS
} from '../actionTypes';
import axios from 'axios';

export const getAllTransfers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/transfers');
        if (data.success) dispatch({ type: GET_ALL_TRANSFERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getTransfer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/transfers/${id}`);
        if (data.success) dispatch({ type: GET_SELECTED_TRANSFERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const gertBalanceDetails = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/balance');
        if (data.success) dispatch({ type: GET_BALANCE_DETAILS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}