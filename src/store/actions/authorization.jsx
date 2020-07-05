import { LOG_IN, LOG_OUT, GET_USER, MY_PROFILE, IS_LOGGED_IN, TOGGLE_ERROR_MODAL, TOGGLE_SUCCESS_MODAL } from '../actionTypes';
import axios from 'axios';
import i18n from '../../services/locales/i18n';

export const login = (body) => async (dispatch) => {
    try {
        const { email, password } = body;
        const { data } = await axios.post('/login', { email, password, device_name: 'web' });
        if (data.success) {
            const { plainTextToken, user, shop_name, current_balance } = data.data;
            localStorage.setItem('token', plainTextToken);
            localStorage.setItem('firstName', user.first_name);
            localStorage.setItem('lastName', user.last_name);
            localStorage.setItem('isAdmin', user.is_admin);
            localStorage.setItem('shopName', shop_name);
            localStorage.setItem('currentBalance', current_balance);
            dispatch({ type: MY_PROFILE, data: { first_name: user.first_name, last_name: user.last_name, is_admin: user.is_admin, shop_name, current_balance } })
            dispatch({ type: LOG_IN, data: data.data });
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
        const data = await axios.post('/logout');
        console.log('logout', data)
        dispatch({ type: LOG_OUT });
        dispatch({ type: IS_LOGGED_IN, data: false });
        localStorage.clear();
    } catch (e) {
        if (e.message.includes('401')) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.clear()
        }
        return Promise.reject(e);
    }
}

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/user');
        if (data) {
            dispatch({ type: GET_USER, data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.clear()
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        } else {
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}

export const resetPassword = (body) => async (dispatch) => {
    try {
        const { old_password, new_password, new_password_confirmation } = body;
        if (old_password === new_password) {
            dispatch({ type: TOGGLE_ERROR_MODAL, data: i18n.t('errorModal.oldNewPassSame') })
        } else if (new_password !== new_password_confirmation) {
            dispatch({ type: TOGGLE_ERROR_MODAL, data: i18n.t('errorModal.newPassSame') })
        } else {
            const { data } = await axios.put('/password/reset', { old_password, new_password, new_password_confirmation });
            if (data.success) {
                dispatch({ type: TOGGLE_SUCCESS_MODAL, data: i18n.t('successModal.changePass') });
                dispatch({ type: LOG_OUT });
                dispatch({ type: IS_LOGGED_IN, data: false });
                localStorage.clear()
            } else if (data.code === 403) {
                dispatch({ type: IS_LOGGED_IN, data: false });
                localStorage.clear()
                axios.defaults.headers.common['Content-Type'] = "applicaton/json"
                axios.defaults.headers.common['Authorization'] = ``
            } else {
                dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
            }
        }
    } catch (e) {
        dispatch({ type: TOGGLE_ERROR_MODAL, data: e.message })
        return Promise.reject(e);
    }
}