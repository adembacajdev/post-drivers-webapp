//RECENT CUSTOMERS are missing from Postman
import {
    GET_ALL_CUSTOMERS, GET_SELECTED_CUSTOMERS, GET_CUSTOMERS_ORDER, DELETE_CUSTOMER, DELETE_CUSTOMERS, GET_RECENT_CUSTOMERS,
    IS_LOGGED_IN, SEARCH_CUSTOMERS
} from '../actionTypes';
import axios from 'axios';

export const getAllCustomers = (limit, page) => async (dispatch) => {
    try {
        const data = await axios.get(`clients/paginate/${limit}?page=${page}`);
        if (data.status === 200) {
            dispatch({ type: GET_ALL_CUSTOMERS, data: data.data })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const searchCustomers = (type, text) => async (dispatch) => {
    try {
        const {data} = await axios.post(`clients/search/${type}?${type}=${text}`);
        console.log('data', data)
        if (data.success) {
            dispatch({ type: SEARCH_CUSTOMERS, data: data.data })
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getCustomer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/clients/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_CUSTOMERS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getCustomerOrders = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/clients/${id}/order`);
        if (data.success) {
            dispatch({ type: GET_CUSTOMERS_ORDER, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getRecentCustomers = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/recent/customers`);
        if (data.success) {
            dispatch({ type: GET_RECENT_CUSTOMERS, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteCustomer = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/clients/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_CUSTOMER, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteCustomers = (client_ids) => async (dispatch) => {
    try {
        var query = '';
        client_ids.forEach(item => {
            if (query === '') query = `client_ids[]=${item}`;
            else query = `${query}&client_ids[]=${item}`;
        });
        console.log('query', query)
        const { data } = await axios.delete(`/clients?${query}`);
        console.log('data', data)
        if (data.success) {
            const data = await axios.get(`clients/paginate/${5}?page=${1}`);
            if (data.status === 200) {
                dispatch({ type: GET_ALL_CUSTOMERS, data: data.data })
            }
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }
    } catch (e) {
        return Promise.reject(e);
    }
}