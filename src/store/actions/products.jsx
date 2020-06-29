import {
    GET_ALL_PRODUCTS, GET_PRODUCT, GET_PRODUCT_ORDER, POST_STORE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, DELETE_PRODUCTS, IS_LOGGED_IN,
    SEARCH_PRODUCTS, TOGGLE_ERROR_MODAL
} from '../actionTypes';
import axios from 'axios';

export const getAllProducts = (limit, page) => async (dispatch) => {
    try {
        const data = await axios.get(`/products/paginate/${limit}?page=${page}`);
        if (data.status === 200) {
            dispatch({ type: GET_ALL_PRODUCTS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const searchProducts = (search) => async (dispatch) => {
    try {
        const { data } = await axios.post(`/products/search?name=${search}`);
        if (data.success) {
            console.log('searchs', data)
            dispatch({ type: SEARCH_PRODUCTS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        if (data.success) {
            dispatch({ type: GET_PRODUCT, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            console.log('data', data)
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const getProductOrder = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}/orders`);
        if (data.success) {
            dispatch({ type: GET_PRODUCT_ORDER, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const postStoreProduct = (body) => async (dispatch) => {
    try {
        const { name, description, price, size, history } = body;
        const { data } = await axios.post(`/products`, { name, description, price, size });
        if (data.success) {
            dispatch({ type: POST_STORE_PRODUCT, data: data.data });
            history.goBack()
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const updateProduct = (body) => async (dispatch) => {
    try {
        const { name, description, size, id, history } = body;
        const { data } = await axios.put(`/products/${id}`, { name, description, size });
        if (data.success) {
            dispatch({ type: UPDATE_PRODUCT, data });
            history.goBack();
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/products/${id}`);
        if (data.success) {
            dispatch({ type: DELETE_PRODUCT, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const deleteProducts = (product_ids) => async (dispatch) => {
    try {
        var query = '';
        product_ids.forEach(item => {
            if (query === '') query = `product_ids[]=${item}`;
            else query = `${query}&product_ids[]=${item}`;
        });
        const { data } = await axios.delete(`/products?${query}`);
        if (data.success) {
            const data = await axios.get(`/products/paginate/${5}?page=${1}`);
            if (data.status === 200) {
                dispatch({ type: GET_ALL_PRODUCTS, data: data.data });
            }
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}