import { GET_ALL_LOCATIONS, GET_SELECTED_LOCATION } from '../actionTypes';
import axios from 'axios';

export const getAllLocations = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/locations');
        if (data.success) dispatch({ type: GET_ALL_LOCATIONS, data });
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getLocation = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/locations/${id}`);
        if (data.success) dispatch({ type: GET_SELECTED_LOCATION, data });
    } catch (e) {
        return Promise.reject(e);
    }
}