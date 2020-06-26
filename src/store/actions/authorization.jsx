import { LOG_IN, LOG_OUT, GET_USER, RESET_PASSWORD, IS_LOGGED_IN } from '../actionTypes';
import axios from 'axios';

export const login = (body) => async (dispatch) => {
    try {
        const { email, password } = body;
        const { data } = await axios.post('/login', { email, password, device_name: 'web' });
        if (data.success) {
            const { plainTextToken } = data.data;
            dispatch({ type: LOG_IN, data: data.data });
            dispatch({ type: IS_LOGGED_IN, data: true });
            localStorage.setItem('token', plainTextToken);
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = `Bearer ${plainTextToken}`
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

export const logout = () => async (dispatch) => {
    try {
        // const { data } = await axios.post('/logout');
        dispatch({ type: LOG_OUT });
        dispatch({ type: IS_LOGGED_IN, data: false });
        localStorage.removeItem('token');
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/user');
        if (data.success) {
            dispatch({ type: GET_USER, data });
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

export const resetPassword = (body) => async (dispatch) => {
    try {
        const { old_password, new_password, new_password_confirmation } = body;
        const { data } = await axios.put('/password/reset', { old_password, new_password, new_password_confirmation });
        if (data.success) {
            dispatch({ type: RESET_PASSWORD, data });
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