//RECENT CUSTOMERS are missing from Postman
import {
    GET_ALL_CUSTOMERS, GET_SELECTED_CUSTOMERS, GET_CUSTOMERS_ORDER, DELETE_CUSTOMER, DELETE_CUSTOMERS, GET_RECENT_CUSTOMERS
} from '../actionTypes';
import axios from 'axios';

export const getAllCustomers = () => async (dispatch) => {
    try {
        const { data } = axios.get(`/clients`);
        if (data.success) dispatch({ type: GET_ALL_CUSTOMERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getCustomer = (id) => async (dispatch) => {
    try {
        const { data } = axios.get(`/clients/${id}`);
        if (data.success) dispatch({ type: GET_SELECTED_CUSTOMERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getCustomerOrders = () => async (dispatch) => {
    try {
        const { data } = axios.get(`/clients/${id}/order`);
        if (data.success) dispatch({ type: GET_CUSTOMERS_ORDER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getRecentCustomers = () => async (dispatch) => {
    try {
        const { data } = axios.get(`/recent/customers`);
        if (data.success) dispatch({ type: GET_RECENT_CUSTOMERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteCustomer = (id) => async (dispatch) => {
    try {
        const { data } = axios.delete(`/clients/${id}`);
        if (data.success) dispatch({ type: DELETE_CUSTOMER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteCustomers = (client_ids) => async (dispatch) => {
    try {
        const { data } = axios.delete(`/clients/${client_ids}`);
        if (data.success) dispatch({ type: DELETE_CUSTOMERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}