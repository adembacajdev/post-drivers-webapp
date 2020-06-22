import { LOG_IN, LOG_OUT, GET_USER, RESET_PASSWORD } from '../actionTypes';
import axios from 'axios';

export const login = (body) => async (dispatch) => {
    try {
        const { email, password } = body;
        const { data } = await axios.post('/login', { email, password });
        if (data.success) dispatch({ type: LOG_IN, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const logout = () => async (dispatch) => {
    try {
        const { data } = await axios.post('/logout');
        if (data.success) dispatch({ type: LOG_OUT, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/user');
        if (data.success) dispatch({ type: GET_USER, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const resetPassword = (body) => async (dispatch) => {
    try {
        const { old_password, new_password, new_password_confirmation } = body;
        const { data } = await axios.put('/password/reset', { old_password, new_password, new_password_confirmation });
        if (data.success) dispatch({ type: RESET_PASSWORD, data });
    } catch (e) {
        return Promise.reject(e);
    }
}