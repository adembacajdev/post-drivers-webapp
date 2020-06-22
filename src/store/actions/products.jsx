import {
    GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_ORDER, POST_STORE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCTS
} from '../actionTypes';
import axios from 'axios';

export const getAllProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/products');
        if (data.success) dispatch({ type: GET_ALL_PRODUCTS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        if (data.success) dispatch({ type: GET_PRODUCT, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getProductOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}/orders`);
        if (data.success) dispatch({ type: GET_PRODUCT_ORDER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const postStoreProduct = (body) => async (dispatch) => {
    try {
        const { name, description, price, size } = body;
        const { data } = await axios.post(`/products`, { name, description, price, size });
        if (data.success) dispatch({ type: POST_STORE_PRODUCT, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const updateProduct = (body) => async (dispatch) => {
    try {
        const { name, description, id, size } = body;
        const { data } = await axios.put(`/products/${id}`, { name, description, size });
        if (data.success) dispatch({ type: UPDATE_PRODUCT, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/products/${id}`);
        if (data.success) dispatch({ type: DELETE_PRODUCT, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteProducts = (product_ids) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/products/${product_ids}`);
        if (data.success) dispatch({ type: DELETE_PRODUCTS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}