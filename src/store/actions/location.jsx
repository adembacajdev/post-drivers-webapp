import { GET_ALL_LOCATIONS, GET_SELECTED_LOCATION, IS_LOGGED_IN, TOGGLE_ERROR_MODAL, LOG_OUT, CLEAR_NOTIFICATION } from '../actionTypes';
import axios from 'axios';

export const getAllLocations = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/locations');
        if (data.success) {
            dispatch({ type: GET_ALL_LOCATIONS, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        } else {
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

export const getLocation = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/locations/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_LOCATION, data: data.data });
        } else if (data.code === 403) {
            dispatch({ type: IS_LOGGED_IN, data: false });
            localStorage.removeItem('token');
            axios.defaults.headers.common['Content-Type'] = "applicaton/json"
            axios.defaults.headers.common['Authorization'] = ``
        } else {
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