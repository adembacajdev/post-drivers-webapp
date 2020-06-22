import { GET_PRICING_TABLE } from '../actionTypes';
import axios from 'axios';

export const getPricingTable = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/pricing');
        if (data.success) dispatch({ type: GET_PRICING_TABLE, data });
    } catch (e) {
        return Promise.reject(e);
    }
}