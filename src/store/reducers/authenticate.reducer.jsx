import { IS_LOGGED_IN } from '../actionTypes';

export default function (state = true, action) {
    const { type, data } = action;
    switch (type) {
        case IS_LOGGED_IN: return data;
        default: return state;
    }
}