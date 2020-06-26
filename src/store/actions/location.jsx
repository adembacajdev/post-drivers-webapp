import { GET_ALL_LOCATIONS, GET_SELECTED_LOCATION, IS_LOGGED_IN } from '../actionTypes';
import axios from 'axios';

export const getAllLocations = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/locations');
        if (data.success) {
            dispatch({ type: GET_ALL_LOCATIONS, data: data.data });
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

export const getLocation = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/locations/${id}`);
        if (data.success) {
            dispatch({ type: GET_SELECTED_LOCATION, data: data.data });
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