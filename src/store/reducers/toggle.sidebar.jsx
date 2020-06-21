import { TOGGLE_SIDEBAR } from '../actionTypes';

export default function(state = false, { type }) {
    if (type === TOGGLE_SIDEBAR) return !state;
    else return state;
}