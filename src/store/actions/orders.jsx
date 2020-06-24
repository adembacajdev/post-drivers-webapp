import {
    GET_ALL_ORDERS, GET_ORDER, NUMBER_OF_ORDERS_BY_STATUS, POST_ORDER, GET_ORDERS_BY_CITY, GET_ORDER_BY_STATUS, DELETE_ORDER,
    DELETE_ORDERS, GET_TOP_CITIES, GET_TOP_PRODUCTS, IS_LOGGED_IN
} from '../actionTypes';
import axios from 'axios';

export const getAllOrders = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/orders');
        if (data.success) {
            dispatch({ type: GET_ALL_ORDERS, data });
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

export const getOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: GET_ORDER, data });
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

export const getNumberOfOrdersByStatus = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/orders/status/count`);
        if (data.success) {
            dispatch({ type: NUMBER_OF_ORDERS_BY_STATUS, data });
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

export const postOrder = (body) => async (dispatch) => {
    try {
        const { product_id, description, first_name, last_name, phone, country, city, address, building, latitude, longitude } = body;
        const { data } = await axios.post(`/orders`, { product_id, description, first_name, last_name, phone, country, city, address, building, latitude, longitude });
        if (data.success) {
            dispatch({ type: POST_ORDER, data });
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

export const getOrderByStatus = (status) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/orders/${status}`);
        if (data.success) {
            dispatch({ type: GET_ORDER_BY_STATUS, data });
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

export const getOrderByCity = (city) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/orders/${city}`);
        if (data.success) {
            dispatch({ type: GET_ORDERS_BY_CITY, data });
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

export const getTopCities = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/top/cities`);
        if (data.success) {
            dispatch({ type: GET_TOP_CITIES, data });
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

export const getTopProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/top/products`);
        if (data.success) {
            dispatch({ type: GET_TOP_PRODUCTS, data });
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

export const deleteOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/orders/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_ORDER, data });
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

export const deleteProducts = (order_ids) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/orders/${order_ids}`);
        if (data.success) {
            dispatch({ type: DELETE_ORDERS, data });
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