import {
    GET_ALL_USERS, GET_SELECTED_USER, POST_USER, UPDATE_USER, DELETE_USER
} from '../actionTypes';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = axios.get(`/users`);
        if (data.success) dispatch({ type: GET_ALL_USERS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = axios.get(`/users/${id}`);
        if (data.success) dispatch({ type: GET_SELECTED_USER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const postUser = (body) => async (dispatch) => {
    try {
        const { first_name, last_name, email, phone } = body;
        const { data } = axios.post(`/users`, { first_name, last_name, email, phone });
        if (data.success) dispatch({ type: POST_USER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const postUser = (body) => async (dispatch) => {
    try {
        const { id, first_name, last_name, email, phone } = body;
        const { data } = axios.put(`/users/${id}`, { first_name, last_name, email, phone });
        if (data.success) dispatch({ type: UPDATE_USER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = axios.delete(`/users${id}`);
        if (data.success) dispatch({ type: DELETE_USER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}