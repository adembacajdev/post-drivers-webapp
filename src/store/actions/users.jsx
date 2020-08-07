import {
    GET_ALL_USERS, GET_SELECTED_USER, POST_USER, UPDATE_USER, DELETE_USER, IS_LOGGED_IN, TOGGLE_ERROR_MODAL, LOG_OUT, CLEAR_NOTIFICATION
} from '../actionTypes';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/users`);
        if (data.success) {
            dispatch({ type: GET_ALL_USERS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
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

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/users/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_USER, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
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

export const postUser = (body, history) => async (dispatch) => {
    try {
        const { first_name, last_name, email, phone } = body;
        const { data } = await axios.post(`/users`, { first_name, last_name, email, phone });
        if (data.success) {
            dispatch({ type: POST_USER, data: data.data });
            history.goBack();
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data })
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

export const updateUser = (id, body, history) => async (dispatch) => {
    try {
        const { first_name, last_name, email, phone } = body;
        const { data } = await axios.put(`/users/${id}`, { first_name, last_name, email, phone });
        if (data.success) {
            dispatch({ type: UPDATE_USER, data: data.data });
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
        if (e?.response?.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`/users/${id}`);
        if (data.success) {
            window.location.reload();
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        }else{
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
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