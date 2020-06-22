import { GET_ALL_LOCATIONS, GET_SELECTED_LOCATION } from '../actionTypes';

export function allLocations(state = null, { type, data }) {
    switch (type) {
        case GET_ALL_LOCATIONS: return data;
        default: return state;
    }
}

export function location(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_LOCATION: return data;
        default: return state;
    }
}