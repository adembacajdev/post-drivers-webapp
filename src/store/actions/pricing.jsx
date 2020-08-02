import { GET_PRICING_TABLE, IS_LOGGED_IN, TOGGLE_ERROR_MODAL, LOG_OUT, CLEAR_NOTIFICATION } from '../actionTypes';
import axios from 'axios';

export const getAllPricing = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/pricing');
        if (data.success) {
            dispatch({ type: GET_PRICING_TABLE, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        } else {
            if (data.message) {
                dispatch({ type: TOGGLE_ERROR_MODAL, data: data.message })
            } else if (data.error) {
                dispatch({ type: TOGGLE_ERROR_MODAL, data: data.error })
            }
        }
    } catch (e) {
        if (e.response.status === 401) {
            dispatch({ type: LOG_OUT });
            dispatch({ type: IS_LOGGED_IN, data: false });
            dispatch({ type: CLEAR_NOTIFICATION })
            localStorage.clear();
        }
        return Promise.reject(e);
    }
}