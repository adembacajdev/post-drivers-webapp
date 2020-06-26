import { GET_ALL_LOCATIONS, GET_SELECTED_LOCATION } from '../actionTypes';


export function allLocations(state = [], { type, data }) {
    switch (type) {
        case GET_ALL_LOCATIONS:
            let newData = [];
            data.forEach(item => { newData.push({ name: 'Point', latLng: [item.latitude, item.longitude] }) })
            return newData;
        default: return state;
    }
}

export function location(state = null, { type, data }) {
    switch (type) {
        case GET_SELECTED_LOCATION: return data;
        default: return state;
    }
}