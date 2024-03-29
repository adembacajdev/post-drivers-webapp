import { GET_SHOP_INFO, TOGGLE_ERROR_MODAL, IS_LOGGED_IN, LOG_OUT, CLEAR_NOTIFICATION } from '../actionTypes';
import axios from 'axios';

export const getShopInfo = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/shop');
        if (data.success) {
            dispatch({ type: GET_SHOP_INFO, data: data.data });
            localStorage.setItem('shopName', data.data.name);
            localStorage.setItem('currentBalance', data.data.current_balance);
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        } else {
            dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
        }
    } catch (e) {
        if (e?.response?.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e)
    }
}