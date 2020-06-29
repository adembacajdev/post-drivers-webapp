import { LOG_IN, LOG_OUT, GET_USER, RESET_PASSWORD, IS_LOGGED_IN, TOGGLE_ERROR_MODAL } from '../actionTypes';
import axios from 'axios';

export const login = (body) => async (dispatch) => {
    try {
        const { email, password } = body;
        const { data } = await axios.post('/login', { email, password, device_name: 'web' });
        if (data.success) {
            const { plainTextToken } = data.data;
            dispatch({ type: LOG_IN, data: data.data });
            localStorage.setItem('token', plainTextToken);
            dispatch({ type: IS_LOGGED_IN, data: true });
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = `Bearer ${plainTextToken}`;
        } else {
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const logout = () => async (dispatch) => {
    try {
        // const { data } = await axios.post('/logout');
        dispatch({ type: LOG_OUT });
        dispatch({ type: IS_LOGGED_IN, data: false });
        localStorage.removeItem('token');
        localStorage.removeItem('shopName');
        localStorage.removeItem('currentBalance');
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/user');
        if (data.success) {
            dispatch({ type: GET_USER, data });
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

export const resetPassword = (body) => async (dispatch) => {
    try {
        const { old_password, new_password, new_password_confirmation } = body;
        const { data } = await axios.put('/password/reset', { old_password, new_password, new_password_confirmation });
        if (data.success) {
            dispatch({ type: RESET_PASSWORD, data });
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