import { GET_PRICING_TABLE } from '../actionTypes';

export function pricingTable(state = null, { type, data }) {
    switch (type) {
        case GET_PRICING_TABLE: return data;
        default: return state;
    }
}