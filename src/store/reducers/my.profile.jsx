import { MY_PROFILE } from '../actionTypes';

export default function (state = null, { type, data }) {
    switch (type) {
        case MY_PROFILE: return data;
        default: return state
    }
}