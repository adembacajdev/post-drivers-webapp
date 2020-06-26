import { GET_PRICING_TABLE, IS_LOGGED_IN } from '../actionTypes';
import axios from 'axios';

export const getAllPricing = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/pricing');
        if (data.success) {
            dispatch({ type: GET_PRICING_TABLE, data: data.data });
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