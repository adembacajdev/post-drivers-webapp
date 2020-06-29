import { GET_SHOP_INFO } from '../actionTypes';

export default function (state = null, { type, data }) {
    switch (type) {
        case GET_SHOP_INFO: return data;
        default: return state;
    }
}