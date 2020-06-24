import {
    GET_ALL_USERS, GET_SELECTED_USER, POST_USER, UPDATE_USER, DELETE_USER, IS_LOGGED_IN
} from '../actionTypes';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = axios.get(`/users`);
        if (data.success) {
            dispatch({ type: GET_ALL_USERS, data });
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

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = axios.get(`/users/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_USER, data });
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

export const postUser = (body) => async (dispatch) => {
    try {
        const { first_name, last_name, email, phone } = body;
        const { data } = axios.post(`/users`, { first_name, last_name, email, phone });
        if (data.success) {
            dispatch({ type: POST_USER, data });
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

export const postUser = (body) => async (dispatch) => {
    try {
        const { id, first_name, last_name, email, phone } = body;
        const { data } = axios.put(`/users/${id}`, { first_name, last_name, email, phone });
        if (data.success) {
            dispatch({ type: UPDATE_USER, data });
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

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = axios.delete(`/users${id}`);
        if (data.success) {
            dispatch({ type: DELETE_USER, data });
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